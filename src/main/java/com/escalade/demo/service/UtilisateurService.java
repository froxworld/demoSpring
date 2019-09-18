package com.escalade.demo.service;

import com.escalade.demo.domain.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.escalade.demo.repository.*;

import java.util.List;

@Service
public class UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepository;

    public List<Utilisateur> findAllByNom(String nom) {
        return utilisateurRepository.findAllByNom(nom);
    }

    public List<Utilisateur> findAllByPrenom(String prenom) {
        return utilisateurRepository.findAllByNom(prenom);
    }

    public Utilisateur removeUtilisateurByNomAndPrenom(String nom, String prenom) {
        return utilisateurRepository.removeUtilisateurByNomAndPrenom(nom, prenom);

    }

    public void deleteByNom(String nom) {
        utilisateurRepository.deleteByNom(nom);
    }

    public void addUtilisateur(Utilisateur utilisateur){
        utilisateurRepository.save(utilisateur);
    }

}

