<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Notifications\Messages\MailMessage;

class CustomResetPasswordNotification extends ResetPassword
{



    protected function buildMailMessage($url)
    {
        //->subject(Lang::get('Reset Password Notification'))
        //->line(Lang::get('You are receiving this email because we received a password reset request for your account.'))
        //->action(Lang::get('Reset Password'), $url)
        //->line(Lang::get('This password reset link will expire in :count minutes.', ['count' => config('auth.passwords.'.config('auth.defaults.passwords').'.expire')]))
        //->line(Lang::get('If you did not request a password reset, no further action is required.'));

        return (new MailMessage)
            ->markdown(
                'mail.custom-reset-password-notification',
                [
                    "url" => $url,
                ]
            );
    }
}
