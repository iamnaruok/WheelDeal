package com.narendrapathak.vehiclemarketplace.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "vehicles")
@Data
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String make;
    private String model;
    private int year;
    private double price;
    private String description;
    private String location;
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User seller;
}
