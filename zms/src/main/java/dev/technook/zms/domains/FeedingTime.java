package dev.technook.zms.domains;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalTime;

@Entity
@Data
public class FeedingTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedingTimeId;

    private LocalTime time;
    private String food;

    @ManyToOne
    @JoinColumn(name = "caretaker_id")
    private CareTaker careTaker;

}
