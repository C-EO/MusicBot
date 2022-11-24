/**
 *
 * @param {import("../lib/MusicBot")} client
 * @param {*} data
 */
module.exports = (client, data) => {
	client.manager.updateVoiceState(data);
};
