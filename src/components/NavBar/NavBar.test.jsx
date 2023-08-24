import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { screen, render, cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NavBar from '../PageMainTitle';
describe('NavBar', () => {

    beforeEach(() => {
      render(
          <MemoryRouter>
              <NavBar />
          </MemoryRouter>
      );
    });

    afterEach(() => {
        cleanup();
      });


      it('Checks NavBar is there', () => {
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument()
      })

    it('renders the Home link', () => {
        const homeLink = screen.getByRole('links');
        expect(homeLink).toBeInTheDocument();
      });

});
