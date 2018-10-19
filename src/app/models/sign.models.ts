export class Sign {
    id: number;
    name: string;
    desc: string;
    image: string;
}

export class RallySign extends Sign {
    posX: string;
    posY: string;
    rotateIndex: number;
}

export enum RallyCategory {
    Novice,
    Advanced
}

export class SignsSet {
    id: number;
    name: string;
    desc: string;
    category: RallyCategory;
    signs: Sign[];
}

export const NoviceSigns: SignsSet[] = [
    {
        id: 1,
        name: 'Novice Set',
        desc: '',
        category: RallyCategory.Novice,
        signs: [
            {
                id: 1,
                name: 'Start',
                desc: 'Indicates the beginning of the course. The dog does not have to be sitting at the start',
                image: '001-start'
            },
            {
                id: 2,
                name: 'Finish',
                desc: ' Indicates the end of the course - timing stops.',
                image: '002-finish'
            },
            {
                id: 3,
                name: 'Stop and Sit',
                desc: 'While heeling, the handler halts and the dog sits in heel position. (Stationary)',
                image: '003-stop_sit'
            },
            {
                id: 4,
                name: 'Stop and Sit Down',
                desc: 'While heeling, the handler halts and the dog sits in heel position. The dog must then down in heel position. ' +
                    '(Stationary)',
                image: '004-stop_sit_down'
            },
            {
                id: 5,
                name: 'Turn Right 90°',
                desc: 'Right Turn - 90° turn to the right.',
                image: '005-turn_right'
            },
            {
                id: 6,
                name: 'Turn Left 90°',
                desc: 'Left Turn - 90° turn to the left',
                image: '006-turn_left'
            },
            {
                id: 7,
                name: 'Turn Right 180°',
                desc: 'About Turn - Right - 180° turn to the right.',
                image: '007-turn_right_180'
            },
            {
                id: 8,
                name: 'Turn Left 180°',
                desc: 'About Turn - Left - 180° turn to the left.',
                image: '008-turn_left_180'
            },
            {
                id: 9,
                name: 'Turn Right 270°',
                desc: '270° Right Turn - While heeling, the dog and handler make a tight 270° turn to the right',
                image: '009-turn_right_270'
            },
            {
                id: 10,
                name: 'Turn Left 270°',
                desc: '270° Left Turn - While heeling, the dog and handler make a tight 270° turn to the left',
                image: '010-turn_left_270'
            },
            {
                id: 11,
                name: 'Turn Right 360°',
                desc: '360° Right Turn - While heeling, the dog and handler make a tight 360° turn to the right',
                image: '011-turn_right_360'
            },
            {
                id: 12,
                name: 'Turn Left 360°',
                desc: '360° Left Turn - While heeling, the dog and handler make a tight 360° turn to the left',
                image: '012-turn_left_360'
            },
            {
                id: 13,
                name: 'Call Front – Finish Right – Forward',
                desc: 'Call Front – Finish Right – Forward – While heeling, the handler stops forward motion and calls the dog to front. ' +
                    'The handler may take several steps backward. The dog must come and sit in front. Without the handler moving  ' +
                    'their feet, the dog must finish to the right. As the dog clears the handler’s path, the handler will heel forward ' +
                    'before the dog returns to heel position. (Stationary)',
                image: '013-call_front_finish_right_forward'
            },
            {
                id: 14,
                name: 'Call Front – Finish Left – Forward',
                desc: 'Call Front – Finish Left – Forward – While heeling, the handler stops forward motion and calls the dog to front. ' +
                    'The handler may take several steps backward. The dog must come and sit in front. Without the handler moving  ' +
                    'their feet, the dog must finish to the left. As the dog clears the handler’s path, the handler will heel forward ' +
                    'before the dog returns to heel position. (Stationary)',
                image: '014-call_front_finish_left_forward'
            },
            {
                id: 15,
                name: 'Call Front – Finish Right – Sit',
                desc: 'Call Front – Finish Right – Sit – While heeling, the handler stops forward motion and calls the dog to front.  ' +
                    'The handler may take several steps backward. The dog must come and sit in front. Without the handler moving their ' +
                    'feet, the dog must finish to the right and sit in heel position. (Stationary)',
                image: '015-call_front_finish_right_stop'
            },
            {
                id: 16,
                name: 'Call Front – Finish Left – Sit',
                desc: 'Call Front – Finish Left – Sit – While heeling, the handler stops forward motion and calls the dog to front.  ' +
                    'The handler may take several steps backward. The dog must come and sit in front. Without the handler moving their ' +
                    'feet, the dog must finish to the left and sit in heel position. (Stationary)',
                image: '016-call_front_finish_left_stop'
            },
            {
                id: 17,
                name: 'Slow Pace',
                desc: 'Slow Pace - The dog and handler must slow down noticeably. This must be followed by a normal pace sign unless ' +
                    'it is the last station on the course.',
                image: '017-slow_pace'
            },
            {
                id: 18,
                name: 'Fast Pace',
                desc: 'Fast Pace -  The dog and handler must speed up noticeably. This must be followed by a normal pace sign',
                image: '018-fast_pace'
            },
            {
                id: 19,
                name: 'Normal Pace',
                desc: 'Normal Pace - The dog and handler walk briskly. This sign is only used after a slow or fast pace sign.',
                image: '019-normal_pace'
            },
            {
                id: 20,
                name: 'Moving Side Step Right',
                desc: 'Moving Side Step Right – While heeling, the handler takes one step to the right, leading with the right foot, ' +
                    'and continues heeling along the newly established line. The dog must move with the handler. This sign will be ' +
                    'placed directly in line of the team’s path requiring the handler and dog to sidestep to the right to pass the sign.',
                image: '020-side_step_right'
            },
            {
                id: 21,
                name: 'Spiral Right - Dog Outside',
                desc: 'Spiral Right - Dog Outside - This sign requires three pylons placed in a straight line with spaces between them ' +
                    'of approximately 6 - 8 feet. The dog and handler must turn to the right to move around each of the pylons.',
                image: '021-spiral_right_outside'
            },
            {
                id: 22,
                name: 'Spiral Left - Dog Inside',
                desc: 'Spiral Left - Dog Inside - This sign requires three pylons placed in a straight line with spaces between them ' +
                    'of approximately 6 - 8 feet. The dog and handler must turn to the left to move around each of the pylons.',
                image: '022-spiral_left_inside'
            },
            {
                id: 23,
                name: 'Straight Figure 8 Weave Twice',
                desc: 'Straight Figure 8 Weave Twice - This sign requires four pylons placed in a straight line with spaces between them ' +
                    'of approximately 6-8 feet. The dog and handler will enter into the weave with the first pylon on their left side. ' +
                    'They must complete the entire weave twice.',
                image: '023-figure_8_twice'
            },
            {
                id: 24,
                name: 'Serpentine Weave Once',
                desc: 'Serpentine Weave Once - This sign requires four pylons placed in a straight line with spaces between them of ' +
                    'approximately 6-8 feet. The dog and handler will enter into the weave with the first pylon on their left side. ' +
                    'They must complete the entire weave once.',
                image: '024-figure_8'
            },
            {
                id: 25,
                name: 'HALT - 1, 2 and 3 Steps',
                desc: 'HALT - 1, 2 and 3 Steps - While heeling, the handler halts and the dog sits in heel position. The handler takes ' +
                    'one step forward, halts and the dog sits in heel position. The handler takes two steps forward, halts and the dog ' +
                    'sits in heel position and then three steps forward, halts and the dog sits in heel position. The dog moves with ' +
                    'the handler each time. (Stationary)',
                image: '025-step_1_2_3_stops'
            },
            {
                id: 26,
                name: 'Call Front – 1, 2 and 3 Steps Backward - Forward',
                desc: 'Call Front – 1, 2 and 3 Steps Backward - Forward - While heeling, the handler stops forward motion and calls ' +
                    'the dog to front. The handler may take several steps backward. The dog must come and sit in front. The handler ' +
                    'takes one step backward and halts. The dog must move with the handler and sit in front as the handler halts. ' +
                    'The handler takes two steps backward and halts. The dog must move with the handler and sit in front as the handler ' +
                    `halts.The handler takes three steps backward and halts. The
                dog must move with the handler and sit in
                front as the handler halts. The handler may
                command/signal the dog to finish. As the dog
                clears the handler’s path, the handler will
                heel forward before the dog returns to heel
                position. (Stationary)`,
                image: '026-call_front_step_1_2_3_stops_back'
            },
            {
                id: 27,
                name: 'Stop and Down',
                desc: `Stop and Down – While heeling, the handler
                stops forward motion and the dog downs in
                heel position. The dog must stay down until
                the handler moves forward. (Stationary)`,
                image: '027-down_and_stop'
            },
            {
                id: 28,
                name: 'HALT – Fast Forward from Sit',
                desc: `HALT – Fast Forward from Sit – While
                heeling, the handler halts and the dog sits in
                heel position. The dog and handler then heel
                forward at a fast pace. This must be followed
                by a normal pace sign. (Stationary)`,
                image: '028-fast_forward_from_sit'
            },
            {
                id: 29,
                name: 'Left About Turn',
                desc: `Left About Turn – While heeling, the
                handler will make an about turn to the left,
                while at the same time the dog must move
                around the handler to the right and into heel
                position.`,
                image: '029-left_about_turn'
            },
            {
                id: 30,
                name: 'HALT - Walk Around',
                desc: `HALT - Walk Around – While heeling,
                the handler halts and the dog sits in heel
                position. The dog must stay while the
                handler walks around behind the dog,
                returns to heel position and pauses. The
                handler must pause before heeling forward.
                (Stationary)`,
                image: '030-stop_walk_around_dog'
            },
            {
                id: 31,
                name: 'HALT – Down – Walk Around',
                desc: `HALT – Down – Walk Around - While
                heeling, the handler halts and the dog sits in
                heel position. The dog must then down and
                stay while the handler walks around behind
                the dog, returns to heel position and pauses.
                The dog and handler then heel forward.
                (Stationary)`,
                image: '031-stop_and_down_walk_around_dog'
            },
            {
                id: 32,
                name: 'Figure 8 – No Distractions',
                desc: `Figure 8 – No Distractions - This sign
                requires two pylons spaced approximately 6-8
                feet apart. The Figure 8 may be entered with
                the pylons on either the left or right side. The
                dog and handler will perform a complete
                figure 8 around the pylons, crossing the
                center line three times`,
                image: '032-figure_8_no_distraction'
            },
            {
                id: 33,
                name: 'HALT – Right Turn – Forward',
                desc: `HALT – Right Turn – Forward - While
                heeling, the handler halts and the dog sits
                in heel position. The handler and dog turn
                right together and heel forward. (Stationary)`,
                image: '033-stop_right_turn_forward'
            },
            {
                id: 34,
                name: 'HALT – Left Turn – Forward',
                desc: `HALT – Left Turn – Forward - While
                heeling, the handler halts and the dog sits in
                heel position. The handler and dog turn left
                together and heel forward. (Stationary)`,
                image: '034-stop_left_turn_forward'
            },
            {
                id: 35,
                name: 'Call Front – Return to Heel',
                desc: `Call Front – Return to Heel – While heeling,
                the handler stops forward motion and may
                command/signal the dog to front. The handler
                may take several steps backward. The dog
                must come and sit in front. The dog must
                stay while the handler walks around behind
                the dog to return to heel position. The
                handler must pause before heeling forward.
                (Stationary)`,
                image: '035-call_front_return_to_heel'
            },
            {
                id: 36,
                name: 'HALT – Slow Forward From Sit',
                desc: `HALT – Slow Forward From Sit – While
                heeling, the handler halts and the dog sits
                in heel position. The dog and handler then
                heel forward at a slow pace. This must be
                followed by a normal pace sign unless it is
                the last sign on the course. (Stationary)`,
                image: '036-stop_slow_forward_from_sit'
            },
            {
                id: 37,
                name: 'Loop Right',
                desc: `Loop Right - While heeling, the dog
                and handler loop right crossing over the
                original path`,
                image: '037-loop_right'
            },
            {
                id: 38,
                name: 'Loop Left',
                desc: `Loop Left - While heeling, the dog and
                handler loop left crossing over the original
                path.`,
                image: '038-loop_left'
            },
            {
                id: 39,
                name: 'Diagonal Right',
                desc: `Diagonal Right – While heeling, the dog and
                handler make an open angle turn to the
                right. The dog must move with the handler.
                This sign will be placed directly in line of the
                team’s path`,
                image: '039-diagonal_right'
            },
            {
                id: 40,
                name: 'Diagonal Left',
                desc: `Diagonal Left – While heeling, the dog and
                handler make an open angle turn to the
                left. The dog must move with the handler.
                This sign will be placed directly in line of the
                team’s path.`,
                image: '040-diagonal_left'
            },
            {
                id: 41,
                name: 'Offset Serpentine Right',
                desc: `Offset Serpentine Right - This sign requires
                three pylons. The center pylon will be offset to
                the right by 3-4 feet with the other two spaced
                approximately 6-8 feet apart. The dog and
                handler will enter into the weave with the
                first pylon on their right side. They must
                complete the entire serpentine together.`,
                image: '041-offset_serpentine_right'
            },
            {
                id: 42,
                name: 'Offset Serpentine Left',
                desc: `Offset Serpentine Left - This sign requires
                three pylons. The center pylon will be offset to
                the left by 3-4 feet with the other two spaced
                approximately 6-8 feet apart. The dog and
                handler will enter into the weave with the
                first pylon on their left side. They must
                complete the entire serpentine together.`,
                image: '042-offset_serpentine_left'
            },

        ]
    } as SignsSet
];
