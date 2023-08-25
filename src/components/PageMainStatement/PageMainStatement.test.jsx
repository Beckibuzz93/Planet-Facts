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

import PageMainStatement from '.';

describe('Geology Image component', () => {
  beforeEach(()=>{
      render(<PageMainStatement/>)
  })

  afterEach(() => {
      cleanup()
  })

  it('should display all the pages main statement', () => {
      const element = screen.getByRole('page-main-statement')
      expect(element).toBeInTheDocument()
  })

  it('should display all the pages wiki links', () => {
    const element = screen.getByRole('wiki-link')
    expect(element).toBeInTheDocument()
})
})
