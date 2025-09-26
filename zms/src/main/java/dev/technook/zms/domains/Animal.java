package dev.technook.zms.domains;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long animalId;

    private String name;
    private String species;

    @ManyToOne
    @JoinColumn(name = "enclosure_id")
    private Enclosure enclosure;

    
}
