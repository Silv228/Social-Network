import {ProfileStatus} from './ProfileStatus'
const { render } = require("@testing-library/react")

test('ProfileStatus should be rendered', () => {
    render(<ProfileStatus />)
})