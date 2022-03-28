export interface IWorkout {
    userId: string;
    startedAt: string;
    endedAt?: string;
    exercises: IWorkoutExercise[];
    dayNumber: number;
    nickname: string;
}

export interface IWorkoutExercise {
    exerciseId: string;
    sets: IWorkoutExerciseSet[];
}

export interface IWorkoutExerciseSet {
    /**
     * populated for weighted and assisted exercises. Should be negative for assisted exercises.
     */
    resistanceInPounds?: number;
    /**
     * populated for weighted and assisted exercises.
     */
    repetitions?: number;
    /**
     * only populated for 'timed' exercises
     */
    complete?: boolean;
}

export type WSWorkoutUpdate =
    | { type: 'START' }
    | { type: 'END' }
    | { type: 'DISCARD' };
