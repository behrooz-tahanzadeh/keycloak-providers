var session = $evaluation.getAuthorizationProvider().getKeycloakSession();
var userId = $evaluation.getContext().getIdentity().getId();

var realmModel = session.getContext().getRealm();
var userModel = session.users().getUserById(realmModel, userId);

var otpCount = session.userCredentialManager().getStoredCredentialsByTypeStream(realmModel, userModel, "otp").count();

if(otpCount > 0) {
    $evaluation.grant();
} else {
    $evaluation.deny();
}