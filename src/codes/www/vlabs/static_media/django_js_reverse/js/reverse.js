this.Urls=(function(){var Urls={};var self={url_patterns:{}};var _get_url=function(url_pattern){return function(){var _arguments,index,url,url_arg,url_args,_i,_len,_ref,_ref_list,match_ref,provided_keys,build_kwargs;_arguments=arguments;_ref_list=self.url_patterns[url_pattern];if(arguments.length==1&&typeof(arguments[0])=="object"){var provided_keys_list=Object.keys(arguments[0]);provided_keys={};for(_i=0;_i<provided_keys_list.length;_i++)
provided_keys[provided_keys_list[_i]]=1;match_ref=function(ref)
{var _i;if(ref[1].length!=provided_keys_list.length)
return false;for(_i=0;_i<ref[1].length&&ref[1][_i]in provided_keys;_i++);return _i==ref[1].length;}
build_kwargs=function(keys){return _arguments[0];}}else{match_ref=function(ref)
{return ref[1].length==_arguments.length;}
build_kwargs=function(keys){var kwargs={};for(var i=0;i<keys.length;i++){kwargs[keys[i]]=_arguments[i];}
return kwargs;}}
for(_i=0;_i<_ref_list.length&&!match_ref(_ref_list[_i]);_i++);if(_i==_ref_list.length)
return null;_ref=_ref_list[_i];url=_ref[0],url_args=build_kwargs(_ref[1]);for(url_arg in url_args){url=url.replace("%("+url_arg+")s",url_args[url_arg]||'');}
return'/'+url;};};var name,pattern,self,url_patterns,_i,_len,_ref;url_patterns=[['about_us',[['about_us/',[]]],],['exercise',[['%(object_id)s/exercise/',['object_id',]]],],['get_answer',[['answer/%(object_id)s/%(exercise_id)s/',['object_id','exercise_id',]]],],['get_problem',[['load_exercise/%(exercise_id)s/',['exercise_id',]]],],['get_solution',[['show_solution/%(exercise_id)s/',['exercise_id',]]],],['get_trace_file',[['get_trace_file/',[]]],],['get_workspace',[['load_workspace/%(exercise_id)s/%(object_id)s/%(problem_id)s/',['exercise_id','object_id','problem_id',]]],],['html_simulator',[['%(object_id)s/html_sim/',['object_id',]]],],['index_page',[['',[]]],],['introduction',[['%(object_id)s/',['object_id',]]],],['job_result',[['job/result/%(uuid)s/',['uuid',]]],],['license',[['license/',[]]],],['ns2_submit',[['ns2_test_submit/',[]]],],['ns3',[['ns3_interface/',[]]],],['ns3_submit',[['ns3_submit/',[]]],],['procedure',[['%(object_id)s/procedure/',['object_id',]]],],['references',[['%(object_id)s/references/',['object_id',]]],],['self_evaluation',[['%(object_id)s/self_evaluation/',['object_id',]]],],['simulation',[['%(object_id)s/simulation/',['object_id',]]],],['theory',[['%(object_id)s/theory/',['object_id',]]],],['trace_avg_thruput',[['avg_thruput/%(node_id)s/',['node_id',]]],],['trace_bytes_rcvd',[['plot/bytes_rcvd/%(node_id)s/x%(levels)s/',['node_id','levels',]]],],['trace_clr_session',[['clear_session/',[]]],],['trace_e2e_delay',[['plot/end2end_delay/%(src_node)s/%(dst_node)s/%(scale)s/',['src_node','dst_node','scale',]]],],['trace_gen_stats',[['general_stats/',[]]],],['trace_hop_cnt',[['plot/hop_cnt_seq_num/%(src_node)s/%(src_port)s/%(dst_node)s/%(dst_port)s/',['src_node','src_port','dst_node','dst_port',]]],],['trace_initialize',[['%(sim_mode)s/',['sim_mode',]]],],['trace_retransmits',[['plot/pkt_retransmits/%(src_node)s/%(dst_node)s/',['src_node','dst_node',]]]]];self.url_patterns={};for(_i=0,_len=url_patterns.length;_i<_len;_i++){_ref=url_patterns[_i],name=_ref[0],pattern=_ref[1];self.url_patterns[name]=pattern;Urls[name]=_get_url(name);Urls[name.replace(/-/g,'_')]=_get_url(name);}
