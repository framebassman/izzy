import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { Formik, Form, Field, FieldArray, FieldProps } from 'formik';
import './Person.css';
import { RandomPerson } from '../../store/model/RandomPerson';

export class Incomes extends Component<any, any> {
  render() {
    const {calculate} = this.props;
    return (
      <FormControl id="persons_form">
        <h1>Замиокулькас</h1>
        <Formik
          initialValues={{ persons: [new RandomPerson()] }}
          onSubmit={values => {
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
                        <Field 
                          name={`persons.${index}.name`}
                          render={({field, form}: FieldProps<any>) => (
                            <div className="person__input">
                              <TextField
                                name={`persons.${index}.name`}
                                placeholder={person.name}
                                autoComplete="off"
                                onChange={(event) => {
                                    field.onChange(event)
                                    form.setFieldValue(`persons.${index}.name`, event.target.value)
                                  }
                                }
                              />
                            </div>
                          )}
                        />
                        <Field 
                          name={`persons.${index}.roubles`}
                          render={({field, form}: FieldProps<any>) => (
                            <div className="person__input">
                              <TextField
                                name={`persons.${index}.roubles`}
                                placeholder={person.roubles.toString()}
                                autoComplete="off"
                                type="number"
                                onChange={(event) => {
                                    field.onChange(event)
                                    form.setFieldValue(`persons.${index}.roubles`, Number(event.target.value))
                                  }
                                }
                              />
                            </div>
                          )}
                        />
                      </div>
                    ))}
                    <Button 
                      type="submit"
                      id="calc"
                      color="primary"
                      disabled={ values.persons.length > 1 ? false : true }
                    >
                      Рассчитать
                    </Button>
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
