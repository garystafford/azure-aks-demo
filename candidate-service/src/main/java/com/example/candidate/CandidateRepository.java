package com.example.candidate;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface CandidateRepository extends MongoRepository<Candidate, String> {

}
