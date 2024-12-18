import { Button,  Menu, Modal } from '@/components/ui';
import { Loader } from '@/components/ui/loader';
import { PagePropsData, UserData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import { Row } from '@tanstack/react-table';
import { IconDotsVertical, IconEye, IconHighlight, IconMail, IconTrash } from 'justd-icons';
import React from 'react';
import toast from 'react-hot-toast';
import { MdOutlineMoreHoriz } from 'react-icons/md';

interface DataTableRowActionsProps<TData> {
    row: Row<UserData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
    const user = row.original;

    const [deleteModal, setDeleteModal] = React.useState(false);
    const closeDeleteModal = () => setDeleteModal(false);
    
    const [verifyEmailModal, setVerifyEmailModal] = React.useState(false);
    const closeVerifyEmailModal = () => setVerifyEmailModal(false);

    const [viewUserModal, setViewUserModal] = React.useState(false);
    const closeViewUserModal = () => setViewUserModal(false);

    const {
        props :{translations}
    } = usePage<PagePropsData>();

    const form = useForm();
    function deleteUser() {
        form.delete(route('users.destroy', user.id), {
            onSuccess: () => {
                toast.success(__(translations,'User deleted successfully'), {
                    icon: <IconTrash />,
                    position: 'top-center'
                });
                closeDeleteModal();
            }
        });
    }
    function verifyEmail() {
        form.post(route('users.verifyEmail', user.id), {
            onSuccess: () => {
                closeVerifyEmailModal();
            }
        });
    }

    return (
        <>
            <Modal.Content
                isOpen={verifyEmailModal}
                onOpenChange={closeVerifyEmailModal}
                role="alertdialog"
                size="md"
                classNames={{ overlay: ' backdrop-blur-sm', content: 'dark:bg-accent' }}
            >
                <Modal.Header>
                    <Modal.Description>{__(translations,'Are you sure you want to proceed?')}</Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                    <Modal.Close isDisabled={form.processing}>Cancel</Modal.Close>
                    <Button intent={'danger'} className="min-w-24" isDisabled={form.processing} onPress={verifyEmail}>
                        {form.processing ? <Loader variant="spin" /> : __(translations,'Confirm')}
                    </Button>
                </Modal.Footer>
            </Modal.Content>
            
            <Modal.Content
                isOpen={viewUserModal}
                onOpenChange={closeViewUserModal}
                role="alertdialog"
                size="md"
                classNames={{ content: 'dark:bg-accent' }}
            >
                <Modal.Header>
                    <Modal.Description>{__(translations,'Are you sure you want to proceed?')}</Modal.Description>

                </Modal.Header>
             
                <Modal.Footer>
                    <Modal.Close isDisabled={form.processing}>Close</Modal.Close>
                   
                </Modal.Footer>
            </Modal.Content>

            <Menu>
                <Menu.Trigger className='flex items-center justify-center w-full'>
                    <MdOutlineMoreHoriz size={30} />
                    <span className="sr-only">Open menu</span>
                </Menu.Trigger>
                <Menu.Content placement="bottom end" className="dark:bg-accent">
                    {!user.email_verified_at && (
                        <Menu.Item
                            className="hover:bg-red-600 hover:text-white"
                            onAction={() => setVerifyEmailModal(true)}
                        >
                            <IconMail /> <span className="pl-2 "> {__(translations,'Manually verify email')}</span>
                        </Menu.Item>
                    )}
                        {/* <>
                            <Menu.Separator />
                            <Menu.Item
                                className="m-0 hover:bg-red-600 hover:text-white"
                                onAction={() => setViewUserModal(true)}
                            >
                                <IconEye className="!text-3xl " /> <span className="pl-2 "> {__(translations,'View')}</span>
                            </Menu.Item>
                        </> */}
                        <>
                            <Menu.Separator />
                            <Menu.Item
                                className="hover:bg-red-600 hover:text-white"
                                href={route('users.edit', { user: user })}
                            >
                                <IconHighlight className="!text-3xl " /> <span className="pl-2 "> {__(translations,'Edit')}</span>
                            </Menu.Item>
                        </>
               
                        <>
                            <Menu.Separator />
                            <Menu.Item isDanger onAction={() => setDeleteModal(true)}>
                                <IconTrash className="!text-3xl " /> <span className="pl-2 "> {__(translations,'Delete')}</span>
                            </Menu.Item>
                        </>
                </Menu.Content>
            </Menu>
            <Modal.Content
                isOpen={deleteModal}
                onOpenChange={closeDeleteModal}
                role="alertdialog"
                size="md"
                classNames={{ overlay: ' backdrop-blur-sm', content: 'dark:bg-accent' }}
            >
                <Modal.Header>
                    <Modal.Title>{`${__(translations,'Delete')} "${user.email}"`}</Modal.Title>
                    <Modal.Description>{__(translations,'Are you sure you want to proceed?')}</Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                    <Modal.Close isDisabled={form.processing}>Cancel</Modal.Close>
                    <Button intent={'danger'} className="min-w-24" isDisabled={form.processing} onPress={deleteUser}>
                        {form.processing ? <Loader variant="spin" /> : __(translations,'Confirm')}
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </>
    );
}
