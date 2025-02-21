import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-formlayoutdemo',
    templateUrl: './formlayoutdemo.component.html',
    styleUrls: ['./formlayoutdemo.scss'],
})
export class FormLayoutDemoComponent implements OnInit {
    contact: FormGroup = <FormGroup>{};
    visible: boolean = false;
    events: any[] = [];
    formActionUrl: string =
        'https://formsubmit.co/ossamfruoummoul.pro@gmail.com';

    constructor(private fb: FormBuilder) {}

    showDialog() {
        this.visible = true;
    }

    onSubmit() {
        if (this.contact.valid) {
            // You don't need to make an HTTP request yourself, FormSubmit handles it
            const form = document.querySelector('form') as HTMLFormElement;
            form.action = this.formActionUrl; // Set the action to FormSubmit.co
            form.submit(); // Trigger form submission to FormSubmit.co

            alert('Votre soumission a bien été envoyée. À bientôt !');
            this.contact.reset(); // Reset form after successful submission
        } else {
            alert('Veuillez remplir les champs obligatoires.');
        }
    }

    ngOnInit() {
        this.formInit();
        this.events = [
            {
                status: 'Demande de soumission : Contactez-nous afin de nous faire part de votre projet.',
                icon: '1',
                color: '#ffd54f',
            },
            {
                status: 'Rencontre primaire : Première rencontre afin de prendre connaissance de vos idées et besoins.',
                icon: '2',
                color: '#ffd54f',
            },
            {
                status: "Création d’un plan et d’une soumission: Selon l’ampleur du projet, un membre de notre équipe ou un designer paysagiste s'affaire à concevoir un plan personnalisé ainsi qu’une soumission détaillée du projet.",
                icon: '3',
                color: '#ffd54f',
            },
            {
                status: 'Rencontre secondaire : Deuxième rencontre ayant pour but de bien vous expliquez le projet et répondre à toutes vos interrogations.',
                icon: '4',
                color: '#ffd54f',
            },
            {
                status: 'Acceptation finale : Dernière étape avant la création, nous signons le contrat de travail et statuons sur la date de début des travaux.',
                icon: '5',
                color: '#ffd54f',
            },
            {
                status: 'Réalisation du projet : L’étape tant attendue arrive enfin, notre équipe dévoué procédera à la conception de votre espace unique de qualité/durable/esthétique',
                icon: '6',
                color: '#ffd54f',
            },
        ];
    }

    formInit(): void {
        this.contact = this.fb.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            ville: ['', Validators.required],
            note: [''],
        });
    }
}
