import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import * as classes from './character.styles';
import { Character } from './api';

interface Props {
  character: Character;
  // onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;


  const onSave = async (values) => {
    const { id, bestSentence, ...rest } = character;
    const updatedCharacter = { id, bestSentence, ...rest };

    try {
      const response = await fetch(`http://localhost:3000/results/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCharacter),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Character updated successfully!');
    } catch (error) {
      console.error('Error updating character:', error);
    }
  };

  //
  


  const [bSentece, setBSentece] = React.useState(character.bestSentence);

  return (
    <>
    <h2>{character.name}</h2>
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
      
      >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent onChange={(event) => setBSentece(event.target.value)}name="bestSentece" label="bestSentece" />
          <Button type="submit"  variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
      </>
  );
};
