package com.example.candidate;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
class Candidate {

    @Id
    private String id;

    private String firstName;
    private String lastName;
    private String politicalParty;

    Candidate() {
        // unused constructor
    }

    public Candidate(String firstName, String lastName, String politicalParty) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.politicalParty = politicalParty;
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFullName() {
        return String.format("%s %s", firstName, lastName);
    }

    public String getPoliticalParty() {
        return politicalParty;
    }

    @Override
    public String toString() {
        return String.format("%s %s (%s)", firstName, lastName, politicalParty);
    }
}
