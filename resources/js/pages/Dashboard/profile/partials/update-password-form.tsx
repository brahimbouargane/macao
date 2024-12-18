import __ from '@/utils/translations';
import { useForm } from '@inertiajs/react';
import { IconKey, IconShieldKeyhole } from 'justd-icons';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { Button, Card, Form, ProgressCircle, TextField } from 'ui';


type UpdatePasswordFormProps = {
    translations: any[]
}
export function UpdatePasswordForm({translations}:UpdatePasswordFormProps) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);
    const { data, setData, put, errors, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: ''
    });

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Your profile information has been updated.');
                reset();
            },
            onError: () => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            }
        });
    };

    return (
        <Card className="bg-accent">
            <Card.Header>
                <Card.Title>{__(translations,'Update Password')}</Card.Title>
                <Card.Description>
                    {__(translations,'Ensure your account is using a long, random password to stay secure.')}
                </Card.Description>
            </Card.Header>
            <Card.Content>
                <Form validationErrors={errors} onSubmit={submit} className="space-y-6">
                    <TextField
                        label={__(translations,'Current Password')}
                        value={data.current_password}
                        name="current_password"
                        prefix={
                            <div className="p-2 border-r-2 ">
                                <IconShieldKeyhole className="text-colors-primary f " />
                            </div>
                        }
                        className="mt-1 !pl-0"
                        onChange={(v) => setData('current_password', v)}
                        type="password"
                        autoComplete="current-password"
                        isRequired
                    />

                    <TextField
                        type="password"
                        name="password"
                        label={__(translations,'Password')}
                        value={data.password}
                        prefix={
                            <div className="p-2 border-r-2 ">
                                <IconKey className="text-colors-primary f " />
                            </div>
                        }
                        className="mt-1 !pl-0"
                        autoComplete="current-password"
                        onChange={(v) => setData('password', v)}
                        errorMessage={errors.password}
                        isRequired
                    />

                    <TextField
                        type="password"
                        label={__(translations,'Password confirmation')}
                        name="password_confirmation"
                        value={data.password_confirmation}
                        prefix={
                            <div className="p-2 border-r-2 ">
                                <IconKey className="text-colors-primary f " />
                            </div>
                        }
                        className="mt-1 !pl-0"
                        onChange={(v) => setData('password_confirmation', v)}
                        errorMessage={errors.password_confirmation}
                        isRequired
                    />

                    <div className="flex items-center gap-4">
                        <Button type="submit" isDisabled={processing} className="w-full">
                            {processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
                            {__(translations,'Save')}
                        </Button>
                        {recentlySuccessful && <p className="text-sm text-success">{__(translations,'Saved')}.</p>}
                    </div>
                </Form>
            </Card.Content>
        </Card>
    );
}
