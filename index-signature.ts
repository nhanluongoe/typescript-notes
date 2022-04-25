type userEmails = {
  [userName: string]: string;
};

const emails: userEmails = { dan: "dan@example.com" };
emails.belly; // no error ?!

const bellyEmail: string = emails.belly; // no error ?!

/**
 * Can enable --noUncheckedIndexedAccess to change this behavior
 */
