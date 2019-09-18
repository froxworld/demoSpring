package com.escalade.demo.repository;

import com.escalade.demo.domain.Lieu;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LieuRepository extends CrudRepository<Lieu, Long> {

    Lieu findByNom(String nom);
    List<Lieu> findAllByNom(String nom);
    List<Lieu> findLieusByCoordonnee_Gps_latitudeAfterAndCoordonnee_Gps_latitudeBeforeAndCoordonnee_Gps_longitudeAfterAndCoordonnee_Gps_longitudeBefore(float coordLatApres, float coordLatAvant, float coordLongApres, float coordLongAvant);
    void deleteByNom(String nom);

}
