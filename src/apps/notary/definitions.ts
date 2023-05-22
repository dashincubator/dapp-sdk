export default {
    notary: {
        indices: [
            {
                name: "ownerId",
                properties: [{ $ownerId: 'asc' }]
            },
            {
                name: "cid",
                properties: [{ cid: 'asc' }],
                unique: true
            }
        ],
        properties: {
            cid: {
                maxLength: 63,
                minLength: 0,
                type: 'string'
            }
        },
        required: ['cid'],
        type: 'object',
        additionalProperties: false
    }
};
