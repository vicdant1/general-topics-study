package com.course.freecodecamp.api;

import com.course.freecodecamp.service.PersonService;
import com.course.freecodecamp.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    public void addPerson(Person person)
    {
        personService.addPerson(person);
    }
}
