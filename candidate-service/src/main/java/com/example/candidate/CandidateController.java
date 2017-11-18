package com.example.candidate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class CandidateController {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private CandidateRepository candidateRepository;

    @RequestMapping(value = "/candidates/summary", method = RequestMethod.GET)
    public ResponseEntity<Map<String, List<String>>> getCandidates() {

        Query query = new Query();
        query.addCriteria(Criteria.where("candidate").exists(true));

        List<Candidate> candidates = mongoTemplate.findAll(Candidate.class);
        candidates.sort(Comparator.comparing(Candidate::getLastName));

        List<String> results = new ArrayList<>();
        candidates.forEach(candidate -> results.add(candidate.toString()));
        return new ResponseEntity<>(Collections.singletonMap("candidates", results), HttpStatus.OK);
    }

    @RequestMapping(value = "/simulation", method = RequestMethod.GET)
    public ResponseEntity<Map<String, String>> getSimulation() {

        candidateRepository.deleteAll();
        CandidateDemoList candidateDemoList = new CandidateDemoList();
        candidateRepository.save(candidateDemoList.getCandidates());
        Map<String, String> result = new HashMap<>();
        result.put("message", "simulation data created");

        return ResponseEntity.status(HttpStatus.OK).body(result); // return 200 with payload
    }
}
