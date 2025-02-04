export const BASE_URL = import.meta.env.VITE_API_BACKEND_URL;

export const ASSIGNE_FORM_URL = `${BASE_URL}/submit/assignee`;
// export const ASSIGNE_FORM_TYPE = `Assignee`;

export const REVIEWERS_FORM_URL = `${BASE_URL}/submit/reviewer`;
// export const REVIEWERS_FORM_TYPE = `Reviewer`;

export const STORY_REVIEWERS_FORM_URL = `${BASE_URL}/submit/storyreviewers`;

export const LOGIN_FORM_URL = `${BASE_URL}/auth/login`;
export const CHANGE_PASSWORD_FORM_URL = `${BASE_URL}/auth/change-password`;
