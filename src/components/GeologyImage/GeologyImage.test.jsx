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

import GeologyImage from '.';

describe('Geology Image component', () => {
  beforeEach(()=>{
      render(<GeologyImage/>)
  })

  afterEach(() => {
      cleanup()
  })

  it('should display the image', () => {
      const element = screen.getByRole('img')
      expect(element).toBeInTheDocument()
  })
})
