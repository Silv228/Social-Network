import profileReducer, { addpostActionCreate, updateStatus, setUserProfile } from "./profile_reducer";

const state = {
    posts: [
        { likes: 12, message: "First post" },
        { likes: 46, message: "Second post" }
    ],
    isMyProfile : false,
    status : null,
    profile : null,
}

test('Post should be added', () => {
    let action = addpostActionCreate("This is a test post)))")
    let newPost = profileReducer(state, action).posts
    expect(newPost[0]).toEqual({likes : 0, message : "This is a test post)))"})
})

test('Status should be added', () => {
    let action = updateStatus('Test status')
    let newStatus = profileReducer(state, action).status
    expect(newStatus).toBe('Test status')
})
test('Profile should be created', () => {
    const profile = {name : 'Silv228', ava : null, userId : 14890}
    let action = setUserProfile(profile, 12890)
    let newProfle = profileReducer(state, action).profile
    expect(newProfle).toEqual(profile)
})
test('isMyProfile should be true (userId in profile should be equal action id)', () => {
    const profile = {name : 'Silv228', ava : null, userId : 12890}
    let action = setUserProfile(profile, 12890)
    let isMyProfile = profileReducer(state, action).isMyProfile
    expect(isMyProfile).toBe(true)
})
test('isMyProfile should be false (userId in profile should be not equal action id)', () => {
    const profile = {name : 'Silv228', ava : null, userId : 1}
    let action = setUserProfile(profile, 12890)
    let isMyProfile = profileReducer(state, action).isMyProfile
    expect(isMyProfile).toBe(false)
})

