package com.escalade.demo.repository;

import com.escalade.demo.domain.Parking;
import com.escalade.demo.domain.Voie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ParkingRepository extends CrudRepository<Parking, Long> {

    Parking findByNom (String nom);
    List<Parking> findAllByLatitudeBeforeAndLatitudeAfterAndLongitudeBeforeAndLongitudeAfter(float latAvant, float latApres, float longAvant, float longApres);

    List<Parking> findAllByListeVoiesContaining(Voie voie);
    void deleteAllByNom(String nom);

}
