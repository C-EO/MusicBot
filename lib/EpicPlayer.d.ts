import { Message } from "discord.js";
import { Player } from "erela.js";
import MusicBot from "./MusicBot";

declare class EpicPlayer extends Player {
    private resumeMessage: Message<boolean>;
    private pausedMessage: Message<boolean>;
    private nowPlayingMessage: Message<boolean>;
    
    // add more undefined member and method types here

    public setResumeMessage(client: MusicBot, message: Message): Message<boolean>;
    public setPausedMessage(client: MusicBot, message: Message): Message<boolean>;
    public setNowplayingMessage(client: MusicBot, message: Message): Message<boolean>;
}

export default EpicPlayer;
