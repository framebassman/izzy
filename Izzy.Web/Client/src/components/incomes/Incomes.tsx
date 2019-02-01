import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { Persons } from './Persons';
import { Person } from './../../store/model/Person';
import { Formik, Form, Field, FieldArray } from 'formik';
import './Person.css';
import { RandomPerson } from '../../store/model/RandomPerson';

export class Incomes extends Component<any, any> {
  render() {
    const {increment, people, calculate} = this.props;
    return (
      <FormControl>
        <h1>Замиокулькас</h1>
        <Formik
          initialValues={{ persons: [new RandomPerson()] }}
          onSubmit={values => {
              console.log(JSON.stringify(values.persons, null, 2));
              calculate(values.persons);
            }
          }
          render={({ values }) => (
            <Form>
              <FieldArray
                name="persons"
                render={arrayHelpers => (
                  <div>
                    <Button
                      id="add"
                      onClick={() => arrayHelpers.insert(values.persons.length, new RandomPerson())}
                    >
                      Добавить
                    </Button>
                    {values.persons.map((person, index) => (
                      <div key={index} className="person">
                        <Field name={`persons.${index}.name`} />
                        <Field name={`persons.${index}.roubles`} />
                      </div>
                    ))}
                    <Button type="submit" id="calc" color="primary" >Рассчитать</Button>
                  </div>
                )}
              />
            </Form>
          )}
        />
      </FormControl>
    )
  }
}
