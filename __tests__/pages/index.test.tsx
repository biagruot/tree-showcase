import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import { TreeType } from '@/types/tree';

const mockTrees: Array<TreeType> = [
  {
    name: `Baobab`,
    species_name: `Adansonia`,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg`,
  },
  {
    name: `Red Mangrove`,
    species_name: `Rhizophora mangle`,
    image: `https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg`,
  },
  {
    name: `Common Hornbeam`,
    species_name: `Carpinus betulus`,
    image: `https://upload.wikimedia.org/wikipedia/commons/2/2c/Carpinus_betulus_-_Hunsr%C3%BCck_001.jpg`,
  },
  {
    name: `Turkey Oak`,
    species_name: `Quercus cerris`,
    image: `https://upload.wikimedia.org/wikipedia/commons/3/34/Quercus_cerris.JPG`,
  },
  {
    name: `Japanese red pine`,
    species_name: `Pinus densiflora`,
    image: `https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG`,
  },
];

describe(`Tree showcase homepage`, () => {
  beforeEach(() => {
    render(<Home trees={mockTrees} />);
  });

  it(`should render the page title`, () => {
    const title = screen.getByText(`Trees showcase`);

    expect(title).toBeInTheDocument();
  });

  it(`should render all the cards`, () => {
    const cards = screen.getAllByTestId(`tree-card`);

    expect(cards.length).toBe(mockTrees.length);
  });

  it(`should render the page title`, () => {
    const footer = screen.getByTestId(`footer`);

    expect(footer).toBeInTheDocument();
  });

  it(`should 1`, () => {
    const footer = screen.getByTestId(`footer`);

    expect(footer).toBeInTheDocument();
  });
});