package dev.technook.zms.domains;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;


@Entity
@Data
public class CareTaker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long careTakerId;

    private String name;


    @OneToMany(mappedBy = "careTaker")
    private List<Enclosure> enclosures;

    @OneToMany(mappedBy = "careTaker")
    private List<FeedingTime> feedings;

}
