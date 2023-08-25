import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
/**
 * @jest-environment jsdom
 */

import './index.css'

import PageMainTitle from '.';

describe('Geology Image component', () => {
  beforeEach(()=>{
      render(<PageMainTitle/>)
  })

  afterEach(() => {
      cleanup()
  })

  it('should display all page main titles', () => {
      const element = screen.getByRole('page-main-title')
      expect(element).toBeInTheDocument()
  })


})
