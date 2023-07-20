export const PAGE_TYPE = {
  LOGIN: "login", // page login
  FORGOT_PASSWORD: "forgot_Password", // PAGE forgot-password
  CREATE_PASSWORD: "create_newpass",
  MYPROFILE: "my_profile",
  RESOURCE_MANAGEMENT: "resource_management",
};

export const ACTIVITY_STATUS = {
  Pending: {
    label: "Pending",
    value: "Pending",
    color: "yellow",
  },
  Approved: {
    label: "Approved",
    value: "Approved",
    color: "green",
  },
  Rejected: {
    label: "Rejected",
    value: "Rejected",
    color: "red",
  },
};

export const ACTIVITY_PROGRESS = {
  Notyet: {
    label: "Not yet",
    value: "Notyet",
    color: "gray",
  },
  Ongoing: {
    label: "On going",
    value: "Ongoing",
    color: "green",
  },
  Ended: {
    label: "Ended",
    value: "Ended",
    color: "red",
  },
};
