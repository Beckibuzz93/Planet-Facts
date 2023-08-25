import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
/**
 * @jest-environment jsdom
 */

import NavBar from '.'
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
    it('Checks header is there', () => {
      const nav = screen.getByRole('header');
      expect(nav).toBeInTheDocument()
    })
    it('Checks icon is there', () => {
      const nav = screen.getByRole('icon');
      expect(nav).toBeInTheDocument()
    })

    it('renders the Home link', () => {
        const homeLink = screen.getByRole('home-link');
        expect(homeLink).toBeInTheDocument();
      });
      it('renders the Mercury link', () => {
        const MercuryLink = screen.getByRole('mercury-link');
        expect(MercuryLink).toBeInTheDocument();
      });
      it('renders the Venus link', () => {
        const VenusLink = screen.getByRole('venus-link');
        expect(VenusLink).toBeInTheDocument();
      });
      it('renders the Earth link', () => {
        const EarthLink = screen.getByRole('earth-link');
        expect(EarthLink).toBeInTheDocument();
      });
      it('renders the Mars link', () => {
        const MarsLink = screen.getByRole('mars-link');
        expect(MarsLink).toBeInTheDocument();
      });
      it('renders the Jupiter link', () => {
        const JupiterLink = screen.getByRole('jupiter-link');
        expect(JupiterLink).toBeInTheDocument();
      });
      it('renders the Saturn link', () => {
        const SaturnLink = screen.getByRole('saturn-link');
        expect(SaturnLink).toBeInTheDocument();
      });
      it('renders the Uranus link', () => {
        const UranusLink = screen.getByRole('uranus-link');
        expect(UranusLink).toBeInTheDocument();
      });
      it('renders the Neptune link', () => {
        const NeptuneLink = screen.getByRole('neptune-link');
        expect(NeptuneLink).toBeInTheDocument();
      });

      
      it('renders the burger nav icon', () => {
        const element = screen.getByRole('burger-nav');
        expect(element).toBeInTheDocument();
      });
      it('Checks burger navigation is there', () => {
      const nav = screen.getByRole('burger-navigation');
      expect(nav).toBeInTheDocument()
      })
      it('renders the Home link on mobile', () => {
        const homeLink = screen.getByRole('home-link-mob');
        expect(homeLink).toBeInTheDocument();
      });
      it('renders the Mercury link mobile', () => {
        const MercuryLink = screen.getByRole('mercury-link-mob');
        expect(MercuryLink).toBeInTheDocument();
      });
      it('renders the Venus link mobile', () => {
        const VenusLink = screen.getByRole('venus-link-mob');
        expect(VenusLink).toBeInTheDocument();
      });
      it('renders the Earth link mobile', () => {
        const EarthLink = screen.getByRole('earth-link-mob');
        expect(EarthLink).toBeInTheDocument();
      });
      it('renders the Mars link mobile', () => {
        const MarsLink = screen.getByRole('mars-link-mob');
        expect(MarsLink).toBeInTheDocument();
      });
      it('renders the Jupiter link mobile', () => {
        const JupiterLink = screen.getByRole('jupiter-link-mob');
        expect(JupiterLink).toBeInTheDocument();
      });
      it('renders the Saturn link mobile', () => {
        const SaturnLink = screen.getByRole('saturn-link-mob');
        expect(SaturnLink).toBeInTheDocument();
      });
      it('renders the Uranus link mobile', () => {
        const UranusLink = screen.getByRole('uranus-link-mob');
        expect(UranusLink).toBeInTheDocument();
      });
      it('renders the Neptune link mobile', () => {
        const NeptuneLink = screen.getByRole('neptune-link-mob');
        expect(NeptuneLink).toBeInTheDocument();
      });
});
