package com.escalade.demo.repository;

import com.escalade.demo.domain.Parking;
import com.escalade.demo.domain.TypeVoie;
import com.escalade.demo.domain.TypeZone;
import com.escalade.demo.domain.Voie;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VoieRepository extends CrudRepository<Voie, Long> {
    List<Voie> findAllByNom(String nom);
    List<Voie> findAllByLatitudeBeforeAndLatitudeAfterAndLongitudeBeforeAndLongitudeAfter(float latAvant, float latApres, float longAvant, float longApres);
    List<Parking> findAllByParking(Parking parking);
    List<Voie> findAllByTypeVoie(TypeVoie typeVoie);
    List<Voie> findAllByTypeZone(TypeZone typeZone);
    void deleteByNom(String nom);

}
