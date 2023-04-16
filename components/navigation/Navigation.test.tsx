import { render, screen, waitFor, within } from '@testing-library/react'
import { Navigation } from './Navigation'
import userEvent from '@testing-library/user-event'

jest.mock('next/navigation', () => ({
    __esModule: true,
    useSelectedLayoutSegment: jest.fn(() => null)
}))

describe('Navigation', () => {
    beforeEach(async () => {
        render(
            <Navigation />
        )
    })

    const user = userEvent.setup()

    it('should render navigation in collapsed mode', () => {
        expect(screen.getByTestId('nav_Pracownicy').className).not.toContain('opacity-0')
    })

    it('should set navigation to expand mode', async () => {
        await user.click(screen.getByTestId('nav_arrowRight'))
        expect(screen.getByTestId('nav_Pracownicy').className).toContain('opacity-0')
    })
})