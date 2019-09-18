package com.escalade.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.escalade.demo.repository.*;

@Service
public class UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepository;


}


//@Service
//public class ClimberServices {
//    @Autowired
//    ClimberRepository repository;
//
//    public List<Climber> findAll() {
//
//        return (List<Climber>) repository.findAll();
//    }
//
//    public void addClimber(Climber climber) {
//        repository.save(climber);
//    }
