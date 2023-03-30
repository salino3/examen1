import React from 'react';
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
import { TextField } from '@mui/material';
import { Form, Formik } from 'formik';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;


  const onSave = async (values: any ) => {
     values.preventDefault();

     const updatedCharacter = { ...character, bestSentence: bSentece };
 
 try {
   const response = await fetch(`http://localhost:3000/results/${character?.id}`, {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCharacter),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    console.log('updatedCharacter', updatedCharacter);

      console.log(
        'Character updated successfully!',
        updatedCharacter.bestSentence
      );
    } catch (error) {
      console.error('Error updating character:', error);
    }
  }; 

  
  


  const [bSentece, setBSentece] = React.useState(character?.bestSentence || "");

  return (
    <>
      <h2>{character?.name}</h2>

      <Formik
        onSubmit={() => {}}
        initialValues={ bSentece}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        <Form className={classes.root}>
          <TextFieldComponent
            value={bSentece && bSentece || ""}
            onChange={(event) => setBSentece(event.target.value)}
            name="bestSentece"
            label="bestSentece"
          />
          <Button
            onClick={(values) => onSave(values)}
            type="submit"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </Form>
      </Formik>

      {/* <form onSubmit={onSave} >
        <TextField
          value={bSentece}
          onChange={(event) => setBSentece(event.target.value)}
          name="bestSentece"
          label="bestSentece"
        />
        <Button
          // onClick={(values) => onSave(values)}
          type="submit"
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </form> */}
    </>
  );
};



 