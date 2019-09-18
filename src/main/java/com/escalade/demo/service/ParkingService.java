package com.escalade.demo.service;

import com.escalade.demo.domain.*;
import com.escalade.demo.repository.ParkingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParkingService {

    ParkingRepository parkingRepository;

    public Parking findByNom (String nom){
       return parkingRepository.findByNom(nom);
    }
    public List<Parking> gps(float latAvant, float latApres, float longAvant, float longApres){
        return  parkingRepository.findAllByLatitudeBeforeAndLatitudeAfterAndLongitudeBeforeAndLongitudeAfter(latAvant, latApres, longAvant, longApres);
            }

    public List<Parking> findAllByListeVoiesContaining(Voie voie){
        return parkingRepository.findAllByListeVoiesContaining(voie);
    }
    public void deleteAllByNom(String nom){
        parkingRepository.deleteParkingByNom(nom);
    }


}
