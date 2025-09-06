<x-mail::message>

Bonjour!


Vous recevez cet e-mail parce que nous avons reçu une demande de réinitialisation du mot de passe de votre compte.
<x-mail::button :url="$url">
  Réinitialiser le mot de passe
</x-mail::button>

Ce lien de réinitialisation du mot de passe expirera dans 60 minutes.

Si vous n'avez pas demandé la réinitialisation de votre mot de passe, aucune autre action n'est requise.

Cordialement
{{ config('app.name') }}

</x-mail::message>








