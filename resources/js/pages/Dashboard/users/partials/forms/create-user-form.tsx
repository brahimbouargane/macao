import { Button, Form, Note, ProgressCircle, Select, TextField } from '@/components/ui';
import { PagePropsData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import { MdAlternateEmail, MdDriveFileRenameOutline, MdOutlinePassword } from 'react-icons/md';
import { toast } from 'sonner';

type CreateUserFormProps = {
  setIsCreateFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateUserForm({ setIsCreateFormModalOpen }: CreateUserFormProps) {
  const translations = usePage<PagePropsData>().props.translations;

  const form = useForm({
    name: '',
    email: '',
    role: null,
    password: '',
    password_confirmation: ''
  });

  function createOtherRole(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    form.post(route('users.store'), {
      onSuccess: () => {
        toast.success(__(translations, 'User created successfully'));
        form.reset();

        setIsCreateFormModalOpen(false);
      }
    });
  }
  return (
    <Form onSubmit={createOtherRole} validationErrors={form.errors} className={cn('space-y-8 p-4')}>
      <div className="grid md:grid-cols-1 md:gap-x-6 gap-y-6 ">
        <TextField
          type="text"
          name="name"
          label={__(translations, 'Name')}
          value={form.data.name}
          className="mt-1"
          autoComplete="name"
          autoFocus
          onChange={(v) => form.setData('name', v)}
          errorMessage={form.errors.name}
          isRequired
          prefix={
            <div className="p-2 border-r-2 ">
              <MdDriveFileRenameOutline className="text-colors-primary" />
            </div>
          }
        />
        <TextField
          isDisabled={form.processing}
          type="email"
          name="email"
          description=""
          prefix={
            <div className="p-2 border-r-2 ">
              <MdAlternateEmail className="text-colors-primary" />
            </div>
          }
          className=" !pl-0"
          label={__(translations, 'Email')}
          value={form.data.email}
          autoComplete="username"
          onChange={function (v) {
            form.setData('email', v);
            if (form.errors.email) {
              form.clearErrors('email');
            }
          }}
          errorMessage={form.errors.email}
          isRequired
        />
        <TextField
          isDisabled={form.processing}
          type="password"
          name="password"
          description={__(translations, 'Minimum length : 8')}
          label={__(translations, 'Password')}
          isRevealable
          prefix={
            <div className="p-2 border-r-2 ">
              <MdOutlinePassword className="text-colors-primary f " />
            </div>
          }
          className=" !pl-0"
          value={form.data.password}
          autoComplete="current-password"
          onChange={function (v) {
            form.setData('password', v);
            if (form.errors.password) {
              form.clearErrors('password');
            }
          }}
          errorMessage={form.errors.password}
          isRequired
        />
        <TextField
          isDisabled={form.processing}
          type="password"
          name="password_confirmation"
          isRevealable
          label={__(translations, 'Password confirmation')}
          prefix={
            <div className="p-2 border-r-2 ">
              <MdOutlinePassword className="text-colors-primary f " />
            </div>
          }
          value={form.data.password_confirmation}
          className=" !pl-0"
          onChange={function (v) {
            form.setData('password_confirmation', v);
            if (form.errors.password) {
              form.clearErrors('password');
            }
          }}
          errorMessage={form.errors.password_confirmation}
          isRequired
        />
        <Select
          isRequired
          isDisabled={form.processing}
          selectedKey={form.data.role}
          onSelectionChange={function (key) {
            form.setData('role', key);
          }}
          label={__(translations, 'Role')}
          placeholder={__(translations, 'Select a role')}
          errorMessage={form.errors.role}
        >
          <Select.Trigger />
          <Select.List
            items={[
              { id: 'admin', name: __(translations, 'Admin') },
              { id: 'manager', name: __(translations, 'Manager') }
            ]}
          >
            {(item) => (
              <Select.Option key={item.id} id={item.id} textValue={item.name}>
                {item.name}
              </Select.Option>
            )}
          </Select.List>
        </Select>
        {form.data.role == 'admin' && (
          <Note className="my-0" intent="warning">
            {__(translations, "Warning: The 'Administrator' role grants full control, including user management.")}
          </Note>
        )}
        {form.data.role == 'manager' && (
          <Note className="my-0" intent="info">
            {__(translations, "Note: The 'Manager' role has control over all resources except user management.")}
          </Note>
        )}
        {form.errors && form.errors.role && <span className="text-xm text-danger">{form.errors.role}</span>}
      </div>

      <div className="flex items-center justify-between !mt-8">
        <Button type="submit" isDisabled={form.processing} className="w-full">
          {form.processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
          {__(translations, 'Create')}
        </Button>
      </div>
    </Form>
  );
}
