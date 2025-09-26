package dev.technook.zms.domains;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Enclosure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long enclosureId;

    private String name;

    @Enumerated(EnumType.STRING)
    private EnclosureType type;

    @ManyToOne
    @JoinColumn(name = "caretaker_id")
    private CareTaker careTaker;
}
