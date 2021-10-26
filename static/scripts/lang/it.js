export default
{
    default_user_name: "Anonimo",
    message_colon: ": ",
    test: "test",
    ui:
    {
        title: "Gikopoipoi",
        subtitle: "Remake non ufficiale",
        
        login_user_count: "Utenti: ",
        login_streamer_count: "Streamer: ",
        
        infobox_label_area: "Area:",
        infobox_value_area: "Città del mare",
        infobox_label_room: "Stanza:",
        infobox_label_user_name: "Nome:",
        infobox_label_user_count: "Utenti:",
        infobox_label_stream_count: "Stream:",
        
        label_username: "Nome utente:",
        label_stream: "Canale {index}: ",
        label_input: "Input:",
        label_log: "Log:",

        button_send: "Invia",
        button_stream_start: "Inizia stream",
        button_stream_stop: "Chiudi stream",
        button_stream_take: "Ricevi stream",
        button_stream_drop: "Interrompi stream",
        button_rula: "#rula",
        button_list: "#list",
        button_preferences: "Impostazioni",
        button_logout: "Logout",
        volume: "Volume: ",
        enable_compression: "Boost: ",
        sound_effect: "Volume",
        tts_volume: "Vol. TTS",
        label_move: "Muovi",
        label_bubble: "Fumetto",
        
        popup_button_ok: "OK",
        popup_button_cancel: "Annulla",
        
        warning_toast_title: "Attenzione",
        
        rula_menu_title: "Lista stanze",
        rula_menu_column_room_name: "Nome stanza",
        rula_menu_column_user_count: "Utenti",
        rula_menu_column_streamers: "Streamer",
        rula_menu_button_rula: "Rula",

        user_list_popup_title: "Lista Utenti (totale: @USER_COUNT@)",
        user_list_popup_column_user_name: "Nome utente",
        user_not_in_room: "Questo utente non è presente in questa stanza.",
        user_inactive: "Questo utente è inattivo.",
        user_list_popup_ignore: "Ignora",
        user_list_popup_unignore: "De-ignora",
        user_list_popup_block: "Blocca",
        user_list_popup_close: "Chiudi",
        user_list_popup_blurb: "Attenzione: Quando ignori un utente, tu non lo vedrai, ma lui potrà ancora vedere te.<br>Quando blocchi un utente, lui rimarrà bloccato anche se si riconnette.",
        
        stream_form_title: "Impostazioni streaming",
        stream_form_mode: "Modalità:",
        stream_form_video_sound_mode: "Video + voce",
        stream_form_sound_only_mode: "Solo voce",
        stream_form_video_only_mode: "Solo video",
        stream_form_show_advanced: "Mostra impostazioni avanzate",
        stream_form_hide_advanced: "Nascondi impostazioni avanzate",
        stream_form_echo_cancellation: "Cancellazione eco",
        stream_form_noise_suppression: "Riduzione del rumore",
        stream_form_auto_gain: "Controllo automatico guadagno",
        stream_form_button_stream: "Avvia stream",
        stream_form_private_stream: "Stream privato (non visibile su siti web al di fuori di gikopoipoi).",
        stream_form_screen_capture: "Cattura schermo",
        stream_form_screen_capture_audio: "Cattura audio dello schermo",
        stream_form_screen_capture_audio_notice: "Questa funzione è sperimentale. Solo Chrome e Edge.\nSu Windows, è possibile acquisire solo l'audio dello schermo o l'audio della tab.",
        stream_form_camera_facing: "Fotocamera telefono:",
        stream_form_camera_facing_user: "Anteriore",
        stream_form_camera_facing_environment: "Posteriore",
        
        preferences_title: "Preferenze",
        preferences_name_bg: "Mostra sfondo nome utente",
        preferences_shift_enter: "Nuova riga con Maiusc+Invio",
        preferences_bubble_opacity: "Opacità fumetto",
        preferences_dark_mode: "Modalità Shaddox",
        preferences_command_section_visible: "Visualizza pulsanti di comando",
        preferences_move_section_visible: "Visualizza pulsanti di movimento",
        preferences_bubble_section_visible: "Visualizza pulsanti fumetto",
        preferences_logout_button_visible: "Visualizza pulsante di disconnessione",
        preferences_show_notifications: "Mostra notifiche desktop",
        preferences_enable_text_to_speech: "Abilita",
        preferences_tts_voice: "Voce",
        preferences_tts_voice_automatic: "Automatico",
        preferences_tts_voice_animalese: "Animalese",
        notifications_are_denied: "Questo sito non è attualmente autorizzato a mostrare notifiche.\nControlla i permessi del tuo browser.",
        preferences_title_general: "Generale",
        preferences_title_game: "Gioco",
        preferences_title_toolbar: "Barra degli strumenti",
        preferences_title_tts: "Sintesi vocale",
        preferences_title_notifications: "Notifiche",
        preferences_message_sound_enabled: "Suono messaggio",
        preferences_login_sound_enabled: "Suono di accesso",
        preferences_name_mention_sound_enabled: "Notifica audio del nome utente",
        preferences_custom_mention_sound_pattern: "Patter per notifica audio del nome utente",
        preferences_custom_mention_sound_notice: "Parole separate da virgola o regex.\nI messaggi che includono le parole o corrispondono alla Regex attivano il suono della menzione.",
        preferences_underlined_usernames: "Sottolinea nomi utente",
        preferences_low_quality: "Bassa qualità",
        preferences_crisp_mode: "Niente",
        preferences_timestamps_in_copied_log: "Includi timestamp nei log copiati",
        preferences_ignore_indicator_in_log: "Mostra nel log un indicatore per i messaggi di utenti ignorati",
        preferences_language: "Lingua",
        

        back_to_homepage: "Torna all'home page",

        chess_slot_title: "Scacchi",
        chess_waiting_for_white: "In attesa del giocatore bianco...",
        chess_waiting_for_black: "In attesa del giocatore nero...",
        chess_white: "Bianco: ",
        chess_black: "Nero: ",
        chess_display_game: "Mostra partita",
        chess_hide_game: "Nascondi partita",
        chess_join_game: "Partecipa al gioco",
        chess_quit_game: "Esci dal gioco",
    },
    msg:
    {
        no_other_users_in_this_room: "Non ci sono altri utenti in questa stanza!",
        connection_lost: "Riconnessione in corso...",
        connection_refused: "Connessione persa, aggiorna la pagina.",
        page_refresh_required: "È pronto un aggiornamento, ricaricare la pagina.",
        
        error_obtaining_media: "Impossibile accedere al supporto. Controlla i permessi del browser.",
        error_obtaining_video: "Impossibile accedere al video. Controlla i permessi del browser.",
        error_obtaining_audio: "Impossibile accedere all'audio. Controlla i permessi del browser.",
        no_webrtc: "Il tuo browser non supporta WebRTC.",
        
        unknown_error: "La connessione è fallita a causa di un errore sconosciuto.",
        invalid_username: "Il nome utente fornito non è valido.",
        ip_restricted: "Hai già effettuato l'accesso due volte con questo indirizzo IP.",
        start_stream_stream_slot_already_taken: "Qualcun altro sta già trasmettendo in questo slot.",
        start_stream_stream_slot_already_taken_by_blocked_streamer: "Qualcuno che stai bloccando sta già trasmettendo in questo slot.",
        start_stream_stream_slot_already_taken_by_blocking_streamer: "Qualcuno che ti ha bloccato sta già trasmettendo in questo slot.",
        start_stream_unknown_error: "Impossibile avviare lo streaming.",
        are_you_sure_you_want_to_logout: "Sei sicuro di voler uscire?",
        are_you_sure_you_want_to_block: "Sei sicuro di voler bloccare questo utente?",
        goodbye: "Ci si vede!",
        flood_warning: "Ehi, non stai parlando un po' troppo velocemente?",
        chess_timeout_reached: "La partita a scacchi è finita: timeout raggiunto.",
        chess_win: "La partita a scacchi è terminata: il vincitore è @USER_NAME@.",
        chess_quit: "La partita a scacchi è terminata: @USER_NAME@ ha abbandonato la partita.",
    },
    room:
    {
        long_st: "Viale anguilla",
        jinja: "Tempio",
        jinja_st: "Ingresso del tempio",
        school_ground: "Scuola: Cortile",
        bar774: "Città sotterranea: Bar 774",
        izakaya774: "Città sotterranea: Bar degli ubriaconi",
        basement: "Città sotterranea",
        bar: "Bar",
        school_st: "Incrocio della scuola",
        bar_st: "Via del bar",
        admin_st: "Via degli sviluppatori",
        admin: "Dipartimento degli sviluppatori",
        admin_bar: "Bar degli sviluppatori",
        cafe_st: "Caffè Vista",
        enkai: "Sala da pranzo",
        idoA: "Pozzo A",
        idoB: "Pozzo B",
        busstop: "Fermata dell'autobus",
        school: "Scuola: Aula",
        school_rouka: "Scuola: Corridoio",
        school_international: "Scuola: Aula culturale",
        school_pc: "Scuola: Laboratorio di informatica",
        seashore: "Spiaggia",
        radio: "Studio radiofonico",
        radio_room1: "Studio radiofonico 1",
        radio_room2: "Studio radiofonico 2: BEAT GIKO",
        radio_room3: "Studio radiofonico 3: G-SQUID",
        radio_gakuya: "Studio radiofonico: Camerino",
        radio_backstage: "Studio radiofonico: Dietro le quinte",
        yatai: "Banchetto del ramen",
        kaidan: "Scala della collina",
        takadai: "Cima della collina",
        yoshinoya: "Yoshinoya",
        silo: "Silo",
        badend: "Sei precipitato nell'abisso!",
        bar_giko: "Bar Giko",
        bar_giko2: "Bar Giko piano inferiore",
        bar_giko_square: "Piazza della fontana",
        densha: "Treno",
    }
}