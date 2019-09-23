package com.escalade.demo.controller;

import com.escalade.demo.domain.Route;
import com.escalade.demo.domain.RouteType;
import com.escalade.demo.domain.ZoneType;
import com.escalade.demo.service.RouteService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RouteController {

    @Autowired
    RouteService routeService;

    @ApiOperation(value = "recherche une voie")
    @GetMapping( value = "/Route/{id}")
    public String findRouteById(@PathVariable int id){
        return "la voie " +id + " existe";
    }
    @ApiOperation(value = "recherche les voie autour d'une coordonneGps(lat, long)")
    @GetMapping( value = "/Route/{latitude}")
    //TODO faire un rayon sinon ou une box avec un parametre de latitude search et de longitude search
    public List<Route> findAllByLatitudeAfterAndLatitudeBeforeAndLongitudeAfterAndLongitudeBefore(@PathVariable float latitude, float longitude, float searchDistance){
        return routeService.findAllByLatitudeAfterAndLatitudeBeforeAndLongitudeAfterAndLongitudeBefore(
                latitude-searchDistance,
                latitude+searchDistance,
                longitude-searchDistance,
                longitude+searchDistance
        );
    }


//    String name;
//    Place place;
//    Parking parking;
//    RouteType routeType;
//    ZoneType zoneType;
//    float latitude;
//    float longitude;
//    Date createAt;
//    Date modifyAt;
//    Date deleteAt;

    //ajout d'une voie
    @ApiOperation(value = "ajouter d'une voie")
    @PostMapping("/Route")
    public void addRoute(@RequestParam("name") String name,
                        @RequestParam("routeType") RouteType routeType,
                        @RequestParam("zoneType")ZoneType zoneType,
                        @RequestParam("latitude") int latitude,
                        @RequestParam("longitude") int longitude
    ) {
        Route route =  new Route(name, routeType, zoneType, latitude, longitude);
        routeService.addRoute(route);
    }


}
