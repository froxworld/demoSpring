package com.escalade.demo.service;

import com.escalade.demo.domain.Lieu;
import com.escalade.demo.repository.LieuRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LieuService {
    LieuRepository lieuRepository;

    public Lieu findByNom(String nom) {
        return lieuRepository.findByNom(nom);

    }

    public List<Lieu> findAllByNom(String nom) {
        return lieuRepository.findAllByNom(nom);

    }

    public List<Lieu> gps(float latAvant, float latApres, float longAvant, float longApres) {
        return lieuRepository.findAllByLatitudeBeforeAndLatitudeAfterAndLongitudeBeforeAndLongitudeAfter(latAvant, latApres, longAvant, longApres);
    }

    public void deleteByNom(String nom) {
        lieuRepository.deleteByNom(nom);
    }

    ;
}
