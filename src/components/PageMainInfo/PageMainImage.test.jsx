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

import PageMainInfo from '.';

describe('Geology Image component', () => {
  beforeEach(()=>{
      render(<PageMainInfo/>)
  })

  afterEach(() => {
      cleanup()
  })

  it('should display all the pages infomation', () => {
      const element = screen.getByRole('page-info')
      expect(element).toBeInTheDocument()
  })
})
