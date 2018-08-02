
export default [{
    'code': 'user',
    'method': null,
    'uri': '/user',
    'children': [
        {
            'code': 'query',
            'method': 'get',
            'uri': ''
        },
        {
            'code': 'get',
            'method': 'get',
            'uri': '/{id}'
        },
        {
            'code': 'add',
            'method': 'post',
            'uri': ''
        },
        {
            'code': 'modify',
            'method': 'post',
            'uri': ''
        },
        {
            'code': 'remove',
            'method': 'delete',
            'uri': '/{id}'
        }
    ]
}];