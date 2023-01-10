import { fireEvent, render, screen } from '@testing-library/react';
import { TreeType } from '@/types/tree';
import Card from '@/components/card';
import { act } from 'react-dom/test-utils';

const tree: TreeType = {
  name: `Baobab`,
  species_name: `Adansonia`,
  image: `https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg`,
};

describe(`Tree showcase homepage`, () => {
  beforeEach(() => {
    render(
      <Card name={tree.name} species={tree.species_name} image={tree.image} />,
    );
  });

  it(`should render the card`, () => {
    const card = screen.getByTestId(`tree-card`);

    expect(card).toBeInTheDocument();
  });

  it(`should render the tree information`, () => {
    const name = screen.getByText(tree.name);
    const species = screen.getByText(tree.species_name);

    expect(name).toBeInTheDocument();
    expect(species).toBeInTheDocument();
  });

  it(`should hide the image by default`, () => {
    const image = screen.getByTestId(`tree-image`);

    expect(image).not.toBeVisible();
  });

  it(`should show the image on button click`, () => {
    const image = screen.getByTestId(`tree-image`);
    const button = screen.getByTestId(`show-image-button`);

    act(() => {
      fireEvent.click(button);
    });

    expect(image).toBeVisible();
  });
});
