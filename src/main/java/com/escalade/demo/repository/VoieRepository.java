package com.escalade.demo.repository;

import com.escalade.demo.domain.Parking;
import com.escalade.demo.domain.Type_Voie;
import com.escalade.demo.domain.Type_Zone;
import com.escalade.demo.domain.Voie;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VoieRepository extends CrudRepository<Voie, Long> {
    List<Voie> findAllByNom(String nom);
    List<Voie> findAllByCoordonnee_Gps_latitudeBeforeAndCoordonnee_Gps_latitudeAfterAAndCoordonnee_Gps_longitudeBeforeAndCoordonnee_Gps_longitudeAfter(float coorLatAvant, float coordLatApres, float coorLongAvant, float coordLongApres);
    List<Parking> findAllByParking(Parking parking);
    List<Voie> findAllByType_voie(Type_Voie type_voie);
    List<Voie> findAllByType_zone(Type_Zone type_zone);
    void deleteByNom(String nom);

}
