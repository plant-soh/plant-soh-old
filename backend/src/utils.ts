import { AppSyncIdentityCognito } from 'aws-lambda';
import { Role } from '../../stueli/src/lib/api';

export function getUserInfo(identity: AppSyncIdentityCognito) {
  return {
    userName: identity.username,
    email: identity.claims.email,
    currentOrgId: identity.claims.currentOrgId,
    groups: identity.groups,
    organizationRole: identity.groups ? getRole(identity.groups) : undefined,
    isAdmin: identity.groups?.includes('Admin') ?? false,
  };
}

export function getRole(groups: string[]) {
  let role: Role | undefined = undefined;
  if (groups?.find((group) => group === Role.Anlagenbauer)) {
    role = Role.Anlagenbauer;
  } else if (groups?.find((group) => group === Role.Anlagenbetreiber)) {
    role = Role.Anlagenbetreiber;
  } else if (groups?.find((group) => group === Role.Admin)) {
    role = Role.Admin;
  }

  return role;
}
