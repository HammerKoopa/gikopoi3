function r(text, reading)
{
    return ctx => !ctx.named("reading") ? text : reading;
}

export const messages =
{
    ja:
    {
        default_user_name: "名無しさん",
        message_colon: "：",
        test: "テスト",
        ui:
        {
            title: "ギコっぽいぽい",
            subtitle: "非公式リメイク",
            
            login_user_count: "人数：",
            login_streamer_count: "配信者：",
            
            infobox_label_area: "ｴﾘｱ：",
            infobox_value_area: "海辺の町",
            infobox_label_room: "ｽﾃｰｼﾞ：",
            infobox_label_user_name: "名前：",
            infobox_label_user_count: "人数：",
            infobox_label_stream_count: "配信者：",
            
            label_username: "ユーザー名：",
            label_stream: "ﾁｬﾝﾈﾙ{index}：",
            label_input: "入力：",
            label_log: "ログ：",

            button_send: "発言",
            button_stream_start: "配信開始",
            button_stream_stop: "配信停止",
            button_stream_take: "受信",
            button_stream_drop: "受信停止",
            button_rula: "#ﾙｰﾗ",
            button_list: "#ﾘｽﾄ",
            button_preferences: "設定",
            button_logout: "ログアウト",
            volume: "音量：",
            enable_compression: "ブースト：",
            sound_effect: "効果音",
            tts_volume: "TTS音量",
            label_move: "移動",
            label_bubble: "吹き出し",
            
            popup_button_ok: "OK",
            popup_button_cancel: "キャンセル",
            
            warning_toast_title: "警告",
            
            rula_menu_title: "ステージ情報",
            rula_menu_column_room_name: "ステージ名",
            rula_menu_column_user_count: "人数",
            rula_menu_column_streamers: "配信者",
            rula_menu_button_rula: "ルーラ",

            user_list_popup_title: "ユーザーリスト（@USER_COUNT@名）",
            user_list_popup_column_user_name: "ユーザー名",
            user_not_in_room: "このユーザーはこの部屋にいません。",
            user_inactive: "このユーザーは活動停止中。",
            user_list_popup_ignore: "一方あぼーん",
            user_list_popup_unignore: "一方あぼーん解除",
            user_list_popup_block: "相互あぼーん",
            user_list_popup_close: "閉じる",
            user_list_popup_blurb: "注意：一方あぼーんしても相手からは見えます。<br>相互あぼーんをすると、相手が再接続してもあぼーんが解除されません。",
            
            stream_form_title: "配信設定",
            stream_form_mode: "モード：",
            stream_form_video_sound_mode: "動画＋音声",
            stream_form_sound_only_mode: "音声のみ",
            stream_form_video_only_mode: "動画のみ",
            stream_form_show_advanced: "高度な設定を表示",
            stream_form_hide_advanced: "高度な設定を非表示",
            stream_form_echo_cancellation: "エコーキャンセラー",
            stream_form_noise_suppression: "ノイズ除去",
            stream_form_auto_gain: "オートゲイン",
            stream_form_button_stream: "配信開始",
            stream_form_private_stream: "非公開配信（ぽいぽい以外のサイトでは見えない）",
            stream_form_screen_capture: "画面共有",
            stream_form_screen_capture_audio: "画面の音声を共有",
            stream_form_screen_capture_audio_notice: "この機能は実験中です。ChromeとEdgeでのみ有効です。\nWindowsでは、画面の音声とタブの音声しか取得できません。",
            stream_form_camera_facing: "スマホのカメラ：",
            stream_form_camera_facing_user: "フロント",
            stream_form_camera_facing_environment: "バック",
            
            preferences_title: "設定",
            preferences_name_bg: "名前の背景を表示",
            preferences_shift_enter: "Shift+Enterで改行",
            preferences_bubble_opacity: "吹き出しの不透明度",
            preferences_dark_mode: "Shaddoxモード",
            preferences_command_section_visible: "呪文ボタンを表示",
            preferences_move_section_visible: "移動ボタンを表示",
            preferences_bubble_section_visible: "吹き出しボタンを表示",
            preferences_logout_button_visible: "ログアウトボタンを表示",
            preferences_show_notifications: "デスクトップ通知を表示",
            preferences_enable_text_to_speech: "有効",
            preferences_tts_voice: "音声",
            preferences_tts_voice_automatic: "自動",
            preferences_tts_voice_animalese: "どうぶつ語",
            notifications_are_denied: "現在このサイトは通知を表示することが許可されていません。\nブラウザの権限を確認してください。",
            preferences_title_general: "一般",
            preferences_title_game: "ゲーム",
            preferences_title_toolbar: "ツールバー",
            preferences_title_tts: "読み上げ（TTS）",
            preferences_title_notifications: "通知",
            preferences_message_sound_enabled: "メッセージ音声",
            preferences_login_sound_enabled: "ログイン音声",
            preferences_name_mention_sound_enabled: "名前音声通知",
            preferences_custom_mention_sound_pattern: "カスタム音声通知パターン",
            preferences_custom_mention_sound_notice: "カンマ区切りの単語または正規表現。\n単語を含む、または正規表現に一致するメッセージは、音声通知が出ます。",
            preferences_underlined_usernames: "ログの名前にアンダーラインを付ける",
            preferences_low_quality: "低画質",
            preferences_crisp_mode: "シャープ",
            preferences_timestamps_in_copied_log: "コピーしたログに時刻を含む",
            preferences_language: "言語",

            back_to_homepage: "トップへ戻る",

            chess_slot_title: "チェス",
            chess_waiting_for_white: "白を待機中",
            chess_waiting_for_black: "黒を待機中",
            chess_white: "白：",
            chess_black: "黒：",
            chess_display_game: "表示",
            chess_hide_game: "非表示",
            chess_join_game: "参加",
            chess_quit_game: "投了",
        },
        msg:
        {
            no_other_users_in_this_room: "この部屋には他のユーザーがいません！",
            connection_lost: "再接続中",
            connection_refused: "接続が失われました。ページを再読み込みしてください。",
            page_refresh_required: "サーバーが更新されたので、ページを再読み込みしてください。",
            
            error_obtaining_media: "メディアを取得できませんでした。ブラウザの許可を確認してください。",
            error_obtaining_video: "動画を取得できませんでした。ブラウザの許可を確認してください。",
            error_obtaining_audio: "音声を取得できませんでした。ブラウザの許可を確認してください。",
            no_webrtc: "このブラウザはWebRTCをサポートしていません。",

            unknown_error: "不明なエラーで接続に失敗しました。",
            invalid_username: "指定されたユーザー名は無効です。",
            ip_restricted: "これ以上同時にログインできません。",
            start_stream_stream_slot_already_taken: "他の誰かがすでにこのぱねで配信しています。",
            start_stream_stream_slot_already_taken_by_blocked_streamer: "あぼーんされている誰かがすでにこのぱねで配信しています。",
            start_stream_stream_slot_already_taken_by_blocking_streamer: "あなたをあぼーんしている誰かがすでにこのぱねで配信しています。",
            start_stream_unknown_error: "配信を開始できませんでした。",
            are_you_sure_you_want_to_logout: "本当にログアウトしますか？",
            are_you_sure_you_want_to_block: "このユーザーを相互あぼーんしますか？",
            goodbye: "　またね！",
            flood_warning: "おい、早口すぎるじゃないか！",
            chess_timeout_reached: "チェス対局が終わりました：時間切れ",
            chess_win: "チェス対局が終わりました：@USER_NAME@の勝利。",
            chess_quit: "チェス対局が終わりました：@USER_NAME@が投了した。",
        },
        room:
        {
            jinja: r("神社", "じんじゃ"),
            jinja_st: r("神社入り口", "じんじゃいりぐち"),
            long_st: r("鰻道", "うなぎみち"),
            school_ground: r("学校 校庭", "がっこう こうてい"),
            bar774: r("地下街 バー774", "ちかがい バー774"),
            izakaya774: r("地下街 居酒屋 名無し", "ちかがい いざかや ななし"),
            basement: r("地下街", "ちかがい"),
            bar: "バー",
            school_st: r("学校通り", "がっこうどおり"),
            bar_st: r("バー通り", "バーどおり"),
            admin_st: r("開発局通り", "かいはつきょくどおり"),
            cafe_st: r("カフェ通り", "カフェどおり"),
            busstop: r("バス停", "バスてい"),
            idoA: r("井戸Ａ", "いどＡ"),
            idoB: r("井戸Ｂ", "いどＢ"),
            school: r("学校 教室", "がっこう きょうしつ"),
            admin: r("開発局", "かいはつきょく"),
            seashore: r("海岸", "かいがん"),
            admin_bar: r("秘密のバー", "ひみつのバー"),
            radio: r("ラヂヲ局", "ラヂヲきょく"),
            radio_room1: r("ラヂヲ局 第1スタジオ", "ラヂヲきょく だい1スタジオ"),
            yatai: r("屋台", "やたい"),
            kaidan: r("高台の階段", "たかだいのかいだん"),
            takadai: r("高台", "たかだい"),
            yoshinoya: r("吉野家", "よしのや"),
            radio_gakuya: r("ラヂヲ局 楽屋", "ラヂヲきょく がくや"),
            radio_backstage: r("ラヂヲ局 舞台裏", "ラヂヲきょく ぶたいうら"),
            radio_room2: r("ラヂヲ局 第2スタジオ BEAT GIKO", "ラヂヲきょく だい2スタジオ BEAT GIKO"),
            radio_room3: r("ラヂヲ局 第3スタジオ G-SQUID", "ラヂヲきょく だい2スタジオ G-SQUID"),
            school_rouka: r("学校 廊下", "がっこう ろうか"),
            school_international: r("学校 国際科教室", "がっこう こくさいかきょうしつ"),
            school_pc: r("学校 パソコンルーム", "がっこう パソコンルーム"),
            enkai: r("宴会場", "えんかいじょう"),
            silo: "サイロ",
            badend: r("転落死しました！", "てんらくししました！"),
            bar_giko: r("ＢＡＲギコ", "バーギコ"),
            bar_giko2: r("ＢＡＲギコ 下階", "バーギコ かかい"),
            bar_giko_square: r("噴水広場", "ふんすいひろば"),
            densha: r("電車", "でんしゃ"),
        }
    },
    en:
    {
        default_user_name: "Anonymous",
        message_colon: ": ",
        test: "test",
        ui:
        {
            title: "Gikopoipoi",
            subtitle: "Unofficial remake",
            
            login_user_count: "Users: ",
            login_streamer_count: "Streamers: ",
            
            infobox_label_area: "Area:",
            infobox_value_area: "Sea City",
            infobox_label_room: "Stage:",
            infobox_label_user_name: "Name:",
            infobox_label_user_count: "Users:",
            infobox_label_stream_count: "Streams:",
            
            label_username: "User name:",
            label_stream: "Channel {index}: ",
            label_input: "Input:",
            label_log: "Log:",

            button_send: "Send",
            button_stream_start: "Start stream",
            button_stream_stop: "Stop stream",
            button_stream_take: "Get stream",
            button_stream_drop: "Drop stream",
            button_rula: "#rula",
            button_list: "#list",
            button_preferences: "Preferences",
            button_logout: "Logout",
            volume: "Volume: ",
            enable_compression: "Boost: ",
            sound_effect: "Volume",
            tts_volume: "TTS Vol.",
            label_move: "Move",
            label_bubble: "Bubble",
            
            popup_button_ok: "OK",
            popup_button_cancel: "Cancel",
            
            warning_toast_title: "Warning",
            
            rula_menu_title: "Stage Info",
            rula_menu_column_room_name: "Stage Name",
            rula_menu_column_user_count: "Users",
            rula_menu_column_streamers: "Streamers",
            rula_menu_button_rula: "Rula",

            user_list_popup_title: "User List (total: @USER_COUNT@)",
            user_list_popup_column_user_name: "User name",
            user_not_in_room: "This user is not in this room.",
            user_inactive: "This user is inactive.",
            user_list_popup_ignore: "Ignore",
            user_list_popup_unignore: "Unignore",
            user_list_popup_block: "Block",
            user_list_popup_close: "Close",
            user_list_popup_blurb: "Warning: When you ignore a user, you will not see them, but they will still see you.<br>When you block a user, he'll stay blocked even if he reconnects.",
            
            stream_form_title: "Stream Settings",
            stream_form_mode: "Mode:",
            stream_form_video_sound_mode: "Video + Voice",
            stream_form_sound_only_mode: "Voice only",
            stream_form_video_only_mode: "Video only",
            stream_form_show_advanced: "Show Advanced Settings",
            stream_form_hide_advanced: "Hide Advanced Settings",
            stream_form_echo_cancellation: "Echo Cancellation",
            stream_form_noise_suppression: "Noise Reduction",
            stream_form_auto_gain: "Auto Gain Control",
            stream_form_button_stream: "Start Streaming",
            stream_form_private_stream: "Private Stream (not visible on websites outside of gikopoipoi).",
            stream_form_screen_capture: "Screen Capture",
            stream_form_screen_capture_audio: "Screen Capture Audio",
            stream_form_screen_capture_audio_notice: "This feature is experimental. Chrome and Edge only. \nOn Windows, only the screen audio or tab audio can be captured.",
            stream_form_camera_facing: "Phone Camera:",
            stream_form_camera_facing_user: "Front",
            stream_form_camera_facing_environment: "Back",
            
            preferences_title: "Preferences",
            preferences_name_bg: "Show Username Background",
            preferences_shift_enter: "Newline On Shift+Enter",
            preferences_bubble_opacity: "Speech Bubble Opacity",
            preferences_dark_mode: "Shaddox Mode",
            preferences_command_section_visible: "Display Command Buttons",
            preferences_move_section_visible: "Display Move Buttons",
            preferences_bubble_section_visible: "Display Bubble Buttons",
            preferences_logout_button_visible: "Display Logout Button",
            preferences_show_notifications: "Show Desktop Notifications",
            preferences_enable_text_to_speech: "Enable",
            preferences_tts_voice: "Voice",
            preferences_tts_voice_automatic: "Automatic",
            preferences_tts_voice_animalese: "Animalese",
            notifications_are_denied: "This site is currently not permitted to show notifications.\nPlease check your browser's permissions.",
            preferences_title_general: "General",
            preferences_title_game: "Game",
            preferences_title_toolbar: "Toolbar",
            preferences_title_tts: "Text-to-Speech",
            preferences_title_notifications: "Notifications",
            preferences_message_sound_enabled: "Message Sound",
            preferences_login_sound_enabled: "Login Sound",
            preferences_name_mention_sound_enabled: "Username Mention Sound",
            preferences_custom_mention_sound_pattern: "Custom Mention Sound Pattern",
            preferences_custom_mention_sound_notice: "Comma separated words or Regex.\nMessages that include the words or match the Regex trigger the mention sound.",
            preferences_underlined_usernames: "Underline Usernames",
            preferences_low_quality: "Low Quality",
            preferences_crisp_mode: "Crisp",
            preferences_timestamps_in_copied_log: "Include timestamps in copied logs",
            preferences_language: "Language",
            

            back_to_homepage: "Go back to home page",

            chess_slot_title: "Chess",
            chess_waiting_for_white: "Waiting for white to join...",
            chess_waiting_for_black: "Waiting for black to join...",
            chess_white: "White: ",
            chess_black: "Black: ",
            chess_display_game: "Display game",
            chess_hide_game: "Hide game",
            chess_join_game: "Join game",
            chess_quit_game: "Quit game",
        },
        msg:
        {
            no_other_users_in_this_room: "There are no other users in this room!",
            connection_lost: "Reconnecting...",
            connection_refused: "Connection Lost, please refresh the page.",
            page_refresh_required: "An update is ready, so please refresh this page.",
            
            error_obtaining_media: "Unable to obtain media. Please check the browser permissions.",
            error_obtaining_video: "Unable to obtain video. Please check the browser permissions.",
            error_obtaining_audio: "Unable to obtain audio. Please check the browser permissions.",
            no_webrtc: "Sorry, your browser doesn't support WebRTC.",
            
            unknown_error: "The connection failed due to an unknown error.",
            invalid_username: "The provided username is invalid.",
            ip_restricted: "You are already logged in twice with this IP address.",
            start_stream_stream_slot_already_taken: "Someone else is already streaming in this slot.",
            start_stream_stream_slot_already_taken_by_blocked_streamer: "Someone who you are blocking is already streaming in this slot.",
            start_stream_stream_slot_already_taken_by_blocking_streamer: "Someone who has blocked you is already streaming in this slot.",
            start_stream_unknown_error: "Unable to start streaming.",
            are_you_sure_you_want_to_logout: "Are you sure you want to logout?",
            are_you_sure_you_want_to_block: "Are you sure you want to block this user?",
            goodbye: "See you soon!",
            flood_warning: "Hey, aren't you talking a bit too fast?",
            chess_timeout_reached: "The chess game is over: timeout reached.",
            chess_win: "The chess game is over: the winner is @USER_NAME@.",
            chess_quit: "The chess game is over: @USER_NAME@ quit the game.",
        },
        room:
        {
            long_st: "Eel Track",
            jinja: "Shrine",
            jinja_st: "Shrine Entrance",
            school_ground: "School: Schoolyard",
            bar774: "Underground Town: Bar 774",
            izakaya774: "Underground Town: Drunker's Bar",
            basement: "Underground Town",
            bar: "Bar",
            school_st: "School Crossing",
            bar_st: "Bar Street",
            admin_st: "Kanrinin Street",
            admin: "Developer's Lounge",
            admin_bar: "Admin's Bar",
            cafe_st: "Cafe Vista",
            enkai: "Banqueting Hall",
            idoA: "Well A",
            idoB: "Well B",
            busstop: "Bus Stop",
            school: "School: Classroom",
            school_rouka: "School: Hallway",
            school_international: "School: Cultural Room",
            school_pc: "School Computer Lab",
            seashore: "Seashore",
            radio: "Radio Studio",
            radio_room1: "Radio Studio 1",
            radio_room2: "Radio Studio 2: BEAT GIKO",
            radio_room3: "Radio Studio 3: G-SQUID",
            radio_gakuya: "Radio Studio: Dressing Room",
            radio_backstage: "Radio Studio: Greenroom",
            yatai: "Sushi Vendor",
            kaidan: "Hilltop Stairway",
            takadai: "Hilltop",
            yoshinoya: "Yoshinoya",
            silo: "Silo",
            badend: "You fell to your death!",
            bar_giko: "Bar Giko",
            bar_giko2: "Bar Giko Lower Floor",
            bar_giko_square: "Fountain Plaza",
            densha: "Train",
        }
    },
    de:
    {
        default_user_name: "Anonym",
        message_colon: ": ",
        test: "test",
        ui:
        {
            title: "Gikopoipoi",
            subtitle: "Inoffizielles Remake",
            
            login_user_count: "Benutzer: ",
            login_streamer_count: "Streamer: ",
            
            infobox_label_area: "Ort:",
            infobox_value_area: "Seestadt",
            infobox_label_room: "Stage:",
            infobox_label_user_name: "Name:",
            infobox_label_user_count: "Benutzer:",
            infobox_label_stream_count: "Streams:",
            
            label_username: "Benutzername:",
            label_stream: "Kanal {index}: ",
            label_input: "Eingabe:",
            label_log: "Log:",

            button_send: "Senden",
            button_stream_start: "Stream starten",
            button_stream_stop: "Stream stoppen",
            button_stream_take: "Stream schauen",
            button_stream_drop: "Stream schließen",
            button_rula: "#rula",
            button_list: "#list",
            button_preferences: "Einstellungen",
            button_logout: "Logout",
            volume: "Lautstärke: ",
            enable_compression: "Verstärken: ",
            sound_effect: "Lauts.",
            tts_volume: "TTS Ls.",
            label_move: "Bewegen",
            label_bubble: "Blase",
            
            popup_button_ok: "OK",
            popup_button_cancel: "Abbrechen",
            
            warning_toast_title: "Warnung",
            
            rula_menu_title: "Stage-Info",
            rula_menu_column_room_name: "Stage-Name",
            rula_menu_column_user_count: "Benutzer",
            rula_menu_column_streamers: "Streamer",
            rula_menu_button_rula: "Rula",

            user_list_popup_title: "Benutzerliste (Zählung: @USER_COUNT@)",
            user_list_popup_column_user_name: "Benutzername",
            user_not_in_room: "Dieser Benutzer ist nicht in diesem Raum.",
            user_inactive: "Dieser Benutzer ist inaktiv.",
            user_list_popup_ignore: "Ignorieren",
            user_list_popup_unignore: "Unignorieren",
            user_list_popup_block: "Blockieren",
            user_list_popup_close: "Schließen",
            user_list_popup_blurb: "Warnung: Wenn Sie einen Benutzer ignorieren, werden Sie ihn nicht sehen, aber er Sie.<br>Wenn Sie einen Benutzer blockieren, bleibt er blockiert, auch wenn er sich erneut verbindet.",
            
            stream_form_title: "Stream-Einstellungen",
            stream_form_mode: "Modus:",
            stream_form_video_sound_mode: "Video + Stimme",
            stream_form_sound_only_mode: "Nur Stimme",
            stream_form_video_only_mode: "Nur Video",
            stream_form_show_advanced: "Erweiterte Einstellungen anzeigen",
            stream_form_hide_advanced: "Erweiterte Einstellungen ausblenden",
            stream_form_echo_cancellation: "Echounterdrückung",
            stream_form_noise_suppression: "Lärmminderung",
            stream_form_auto_gain: "Automatische Verstärkungsregelung",
            stream_form_button_stream: "Streamen starten",
            stream_form_private_stream: "Privater Stream (nicht sichtbar auf Webseiten außerhalb von gikopoipoi).",
            stream_form_screen_capture: "Bildschirmaufnahme",
            stream_form_screen_capture_audio: "Bildschirmaufnahme-Audio",
            stream_form_screen_capture_audio_notice: "Diese Funktion ist experimentell. Nur Chrome und Edge. \nUnter Windows kann nur das Bildschirm- oder Tab-Audio aufgenommen werden .",
            stream_form_camera_facing: "Handy-Kamera:",
            stream_form_camera_facing_user: "Vorne",
            stream_form_camera_facing_environment: "Hinten",
            
            preferences_title: "Einstellungen",
            preferences_name_bg: "Hintergrund des Benutzernamens anzeigen",
            preferences_shift_enter: "Neue Zeile bei Umschalt+Eingabe",
            preferences_bubble_opacity: "Sprechblase-Opazität",
            preferences_dark_mode: "Shaddox-Modus",
            preferences_command_section_visible: "Befehl-Buttons anzeigen",
            preferences_move_section_visible: "Bewegungs-Buttons anzeigen",
            preferences_bubble_section_visible: "Sprechblase-Button anzeigen",
            preferences_logout_button_visible: "Abmelde-Button anzeigen",
            preferences_show_notifications: "Desktop-Benachrichtigungen anzeigen",
            preferences_enable_text_to_speech: "Aktivieren",
            preferences_tts_voice: "Stimme",
            preferences_tts_voice_automatic: "Automatisch",
            preferences_tts_voice_animalese: "Tierisch",
            notifications_are_denied: "Diese Website darf derzeit keine Benachrichtigungen anzeigen.\nBitte überprüfen Sie die Berechtigungen Ihres Browsers",
            preferences_title_general: "Allgemeines",
            preferences_title_game: "Spiel",
            preferences_title_toolbar: "Toolbar",
            preferences_title_tts: "Text-to-Speech",
            preferences_title_notifications: "Benachrichtigungen",
            preferences_message_sound_enabled: "Nachrichtenton",
            preferences_login_sound_enabled: "Login-Ton",
            preferences_name_mention_sound_enabled: "Benutzername-Erwähnungston",
            preferences_custom_mention_sound_pattern: "Benutzerdefiniertes Erwähnungston",
            preferences_custom_mention_sound_notice: "Durch Komma getrennte Wörter oder Regex.\nNachtrichten, die diese Wörter enthalten oder mit der Regex übereinstimmen, lösen den Erwähnungston aus.",
            preferences_underlined_usernames: "Benutzernamen unterstreichen",
            preferences_low_quality: "Geringe Qualität",
            preferences_crisp_mode: "Knackig",
            preferences_timestamps_in_copied_log: "Zeitstempel in den kopierten Logs aufnehmen",
            preferences_language: "Sprache",
            

            back_to_homepage: "Zurück zur Startseite",

            chess_slot_title: "Schach",
            chess_waiting_for_white: "Warten auf den Beitritt von Weiß...",
            chess_waiting_for_black: "Warten auf den Beitritt von Schwarz...",
            chess_white: "Weiß: ",
            chess_black: "Schwarz: ",
            chess_display_game: "Spiel anzeigen",
            chess_hide_game: "Spiel ausblenden",
            chess_join_game: "Spiel beitreten",
            chess_quit_game: "Spiel verlassen",
        },
        msg:
        {
            no_other_users_in_this_room: "Es gibt keine anderen Benutzer in diesem Raum!",
            connection_lost: "Wiederverbindung...",
            connection_refused: "Verbindung verloren, bitte aktualisieren Sie die Seite.",
            page_refresh_required: "Ein Update ist bereit, bitte aktualisieren Sie die Seite.",
            
            error_obtaining_media: "Es ist nicht möglich die Medien zu erhalten. Bitte überprüfen Sie die Browserberechtigungen.",
            error_obtaining_video: "Es ist nicht möglich das Video zu erhalten. Bitte überprüfen Sie die Browserberechtigungen.",
            error_obtaining_audio: "Es ist nicht möglich das Audio zu erhalten. Bitte überprüfen Sie die Browserberechtigungen.",
            no_webrtc: "Ihr Browser unterstützt leider kein WebRTC.",
            
            unknown_error: "Die Verbindung ist aufgrund eines unbekannten Fehlers fehlgeschlagen.",
            invalid_username: "Der angegebene Benutzername ist ungültig.",
            ip_restricted: "Sie sind schon zweimal mit dieser IP-Adresse eingeloggt.",
            start_stream_stream_slot_already_taken: "Jemand anderes streamt bereits in diesem Slot.",
            start_stream_stream_slot_already_taken_by_blocked_streamer: "Jemand, den Sie blockieren, streamt bereits in diesem Slot.",
            start_stream_stream_slot_already_taken_by_blocking_streamer: "Jemand, der Sie blockiert hat, streamt bereits in diesem Slot.",
            start_stream_unknown_error: "Stream kann nicht gestarted werden.",
            are_you_sure_you_want_to_logout: "Möchten Sie sich wirklich abmelden?",
            are_you_sure_you_want_to_block: "Möchten Sie diesen Benutzer wirklich blockieren?",
            goodbye: "Auf Wiedersehen!",
            flood_warning: "Hey, sprechen Sie nicht eine bisschen zu schnell?",
            chess_timeout_reached: "Das Schachspiel ist vorbei: Bedenkzeit überschreitet.",
            chess_win: "Das Schachspiel ist vorbei: Der Gewinner ist @USER_NAME@.",
            chess_quit: "Das Schachspiel ist vorbei: @USER_NAME@ hat das Spiel verlassen.",
        },
        room:
        {
            long_st: "Aalgasse",
            jinja: "Schrein",
            jinja_st: "Schreinpforte",
            school_ground: "Schule: Schulhof",
            bar774: "Untergrundstadt: Bar 774",
            izakaya774: "Untergrundstadt: Izakaya Anonym",
            basement: "Untergrundstadt",
            bar: "Bar",
            school_st: "Schulstraße",
            bar_st: "Kneipenstraße",
            admin_st: "Entwicklerstraße",
            admin: "Entwickler-Lounge",
            admin_bar: "Geheime Bar",
            cafe_st: "Caféstraße",
            enkai: "Bankettsaal",
            idoA: "Brunnen A",
            idoB: "Brunnen B",
            busstop: "Bushaltestelle",
            school: "Schule: Klassenzimmer",
            school_rouka: "Schule: Flur",
            school_international: "Schule: Internationales Klassenzimmer",
            school_pc: "Schule: Computerraum",
            seashore: "Strand",
            radio: "Radiostation",
            radio_room1: "Radiostation: Studio 1",
            radio_room2: "Radiostation: Studio 2 BEAT GIKO",
            radio_room3: "Radiostation: Studio 3 G-SQUID",
            radio_gakuya: "Radiostation: Umkleideraum",
            radio_backstage: "Radiostation: Hinter den Kulissen",
            yatai: "Ramen-Stand",
            kaidan: "Bergtreppe",
            takadai: "Bergkuppe",
            yoshinoya: "Yoshinoya",
            silo: "Silo",
            badend: "Sie sind zu Tode gestürzt!",
            bar_giko: "Bar Giko",
            bar_giko2: "Bar Giko Untergeschoss",
            bar_giko_square: "Brunnenplatz",
            densha: "Bahn",
        }
    },
    it:
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
            preferences_timestamps_in_copied_log: "Includi timestamp nei registri copiati",
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
    },
}
