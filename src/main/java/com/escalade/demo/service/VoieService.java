package com.escalade.demo.service;

//com.escalade

import com.escalade.demo.domain.*;
import com.escalade.demo.repository.*;

//List
import java.util.List;

//spring
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoieService {

    @Autowired
    VoieRepository voieRepository;

    public List<Voie> findAllByNom(String nom) {
        return voieRepository.findAllByNom(nom);
    }

    public List<Voie> findAllByGps(float latAvant, float latApres, float longAvant, float longApres) {
        return voieRepository.findAllByLatitudeBeforeAndLatitudeAfterAndLongitudeBeforeAndLongitudeAfter(latAvant, latApres, longAvant, longApres);
    }

    public List<Parking> findAllByParking(Parking parking) {
        return voieRepository.findAllByParking(parking);
    }

    public List<Voie> findAllByTypeVoie(TypeVoie typeVoie) {
        return voieRepository.findAllByTypeVoie(typeVoie);

    }

    public List<Voie> findAllByTypeZone(TypeZone typeZone) {
        return voieRepository.findAllByTypeZone(typeZone);
    }


    public void deleteByNom(String nom) {
        voieRepository.deleteByNom(nom);
    }


}

