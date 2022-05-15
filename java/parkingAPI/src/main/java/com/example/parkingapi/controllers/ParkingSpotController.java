package com.example.parkingapi.controllers;

import com.example.parkingapi.services.interfaces.IParkingSpotService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/parking-spot")
public class ParkingSpotController {
    private final IParkingSpotService _parkingSpotService;

    public ParkingSpotController(IParkingSpotService parkingSpotService) {
        _parkingSpotService = parkingSpotService;
    }
}
